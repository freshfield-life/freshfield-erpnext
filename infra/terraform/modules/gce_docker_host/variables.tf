variable "name" { type = string }
variable "env" { type = string }
variable "region" { type = string }
variable "zone" { type = string }
variable "subnet_self_link" { type = string }
variable "machine_type" {
  type    = string
  default = "e2-standard-4"
}
variable "disk_size_gb" {
  type    = number
  default = 150
}
variable "network_tags" {
  type    = list(string)
  default = ["erp-host"]
}
variable "labels" {
  type    = map(string)
  default = {}
}
variable "service_account_id" { type = string }
variable "create_static_ip" {
  type    = bool
  default = true
}
variable "startup_script" {
  type    = string
  default = <<-EOT
    #!/usr/bin/env bash
    set -euxo pipefail
    export DEBIAN_FRONTEND=noninteractive
    apt-get update
    apt-get install -y ca-certificates curl gnupg lsb-release
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    chmod a+r /etc/apt/keyrings/docker.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list
    apt-get update
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
    systemctl enable docker
    usermod -aG docker ubuntu || true
    mkdir -p /opt/erpnext && chown -R ubuntu:ubuntu /opt/erpnext
    echo "Docker installed. Copy your docker-compose.yml to /opt/erpnext and run: docker compose up -d"
  EOT
}
