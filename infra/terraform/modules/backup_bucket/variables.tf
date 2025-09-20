variable "bucket_name" { type = string }
variable "region" { type = string }
variable "retention_days" {
  type    = number
  default = 30
}
variable "labels" {
  type    = map(string)
  default = {}
}
