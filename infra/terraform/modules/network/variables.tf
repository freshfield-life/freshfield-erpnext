variable "network_name" { type = string }
variable "region" { type = string }
variable "subnet_cidr" { type = string }
variable "target_tags" {
  type    = list(string)
  default = ["erp-host"]
}
variable "source_ranges" {
  type    = list(string)
  default = ["0.0.0.0/0"] # tighten later
}
