terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

resource "google_service_account" "sa" {
  account_id   = var.service_account_id
  display_name = "ERP Host ${var.name} SA"
}

resource "google_compute_address" "static_ip" {
  count  = var.create_static_ip ? 1 : 0
  name   = "${var.name}-ip"
  region = var.region
}

resource "google_compute_instance" "vm" {
  name         = var.name
  machine_type = var.machine_type
  zone         = var.zone
  tags         = var.network_tags

  boot_disk {
    initialize_params {
      image = "projects/ubuntu-os-cloud/global/images/family/ubuntu-2204-lts"
      size  = var.disk_size_gb
      type  = "pd-ssd"
    }
  }

  network_interface {
    subnetwork = var.subnet_self_link
    access_config {
      nat_ip = var.create_static_ip ? google_compute_address.static_ip[0].address : null
    }
  }

  metadata = {
    startup-script = var.startup_script
  }

  service_account {
    email  = google_service_account.sa.email
    scopes = ["https://www.googleapis.com/auth/cloud-platform"]
  }

  labels = merge({
    env = var.env
  }, var.labels)
}

output "instance_name" { value = google_compute_instance.vm.name }
output "instance_ip"   { value = google_compute_instance.vm.network_interface[0].access_config[0].nat_ip }
output "service_account_email" { value = google_service_account.sa.email }
