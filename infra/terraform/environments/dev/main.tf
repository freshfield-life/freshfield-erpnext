module "network" {
  source       = "../../modules/network"
  network_name = var.network_name
  region       = var.region
  subnet_cidr  = var.subnet_cidr
  target_tags  = ["erp-host"]
  source_ranges = ["0.0.0.0/0"] # TODO: restrict SSH ingress to your IP
}

module "backups" {
  source      = "../../modules/backup_bucket"
  bucket_name = var.backup_bucket_name
  region      = var.region
  labels      = { env = "dev" }
}

module "host" {
  source            = "../../modules/gce_docker_host"
  name              = "erp-dev"
  env               = "dev"
  region            = var.region
  zone              = var.zone
  subnet_self_link  = module.network.subnet_self_link
  machine_type      = var.instance_type
  disk_size_gb      = var.disk_size_gb
  network_tags      = ["erp-host"]
  labels            = { env = "dev" }
  service_account_id = "erp-dev-sa"
  create_static_ip  = var.create_static_ip
}

output "ip_address" {
  value = module.host.instance_ip
}
output "backup_bucket" {
  value = module.backups.bucket_name
}
