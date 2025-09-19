terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

resource "google_storage_bucket" "backups" {
  name          = var.bucket_name
  location      = var.region
  storage_class = "STANDARD"
  uniform_bucket_level_access = true

  versioning { enabled = true }

  lifecycle_rule {
    action { type = "Delete" }
    condition {
      age = var.retention_days
    }
  }

  labels = var.labels
}

output "bucket_name" { value = google_storage_bucket.backups.name }
