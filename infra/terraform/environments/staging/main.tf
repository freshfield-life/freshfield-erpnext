# Use existing VPC from dev environment
data "google_compute_network" "existing_vpc" {
  name = "erp-vpc"
}

data "google_compute_subnetwork" "existing_subnet" {
  name   = "erp-vpc-subnet"
  region = var.region
}

module "backups" {
  source      = "../../modules/backup_bucket"
  bucket_name = var.backup_bucket_name
  region      = var.region
  labels      = { env = "staging" }
}

module "host" {
  source            = "../../modules/gce_docker_host"
  name              = "erp-staging"
  env               = "staging"
  region            = var.region
  zone              = var.zone
  subnet_self_link  = data.google_compute_subnetwork.existing_subnet.self_link
  machine_type      = var.instance_type
  disk_size_gb      = var.disk_size_gb
  network_tags      = ["erp-host"]
  labels            = { env = "staging" }
  service_account_id = "erp-staging-sa"
  create_static_ip  = var.create_static_ip
}

output "ip_address" {
  value = module.host.instance_ip
}
output "backup_bucket" {
  value = module.backups.bucket_name
}
