variable "project_id" { type = string }
variable "region" {
  type    = string
  default = "us-west1"
}
variable "zone" {
  type    = string
  default = "us-west1-b"
}
variable "network_name" {
  type    = string
  default = "erp-vpc"
}
variable "subnet_cidr" {
  type    = string
  default = "10.10.0.0/24"
}
variable "instance_type" {
  type    = string
  default = "e2-standard-4"
}
variable "disk_size_gb" {
  type    = number
  default = 150
}
variable "create_static_ip" {
  type    = bool
  default = true
}
variable "backup_bucket_name" {
  type    = string
  default = "CHANGE_ME-erp-backups" # must be globally unique
}
