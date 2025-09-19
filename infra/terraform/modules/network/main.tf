terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

resource "google_compute_network" "vpc" {
  name                    = var.network_name
  auto_create_subnetworks = false
  routing_mode            = "REGIONAL"
}

resource "google_compute_subnetwork" "subnet" {
  name          = "${var.network_name}-subnet"
  ip_cidr_range = var.subnet_cidr
  region        = var.region
  network       = google_compute_network.vpc.self_link
}

resource "google_compute_firewall" "allow_ssh_web" {
  name    = "${var.network_name}-allow-ssh-web"
  network = google_compute_network.vpc.name

  allow {
    protocol = "tcp"
    ports    = ["22","80","443"]
  }

  target_tags = var.target_tags
  source_ranges = var.source_ranges
}

output "network_self_link" {
  value = google_compute_network.vpc.self_link
}

output "subnet_self_link" {
  value = google_compute_subnetwork.subnet.self_link
}
