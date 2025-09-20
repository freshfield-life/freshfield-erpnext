# GitHub Environments Setup Guide

**For Beginners - No Coding Experience Required**

## 🎯 **What Are GitHub Environments?**

GitHub Environments are like "deployment stages" that help you:
- **Control who can deploy** to each environment
- **Require approvals** before production deployments
- **Store secrets** (passwords, keys) for each environment
- **Track deployment history** and rollbacks

Think of it like having 3 different "rooms" for your ERPNext:
- **Development Room** - Where you test new features
- **Staging Room** - Where you test everything before going live
- **Production Room** - Where your real users work

## 📋 **Step-by-Step Setup**

### **Step 1: Access Your Repository**

1. Go to: `https://github.com/[your-username]/freshfield-erpnext`
2. Click **Settings** (top right)
3. Click **Environments** (left sidebar)

### **Step 2: Create Development Environment**

1. Click **New environment**
2. **Name:** `dev`
3. **Description:** `Development environment for testing`
4. Click **Configure environment**

**Protection Rules:**
- ✅ **Required reviewers:** Add yourself
- ✅ **Wait timer:** 0 minutes
- ✅ **Deployment branches:** `main` branch only

**Environment secrets:**
- Click **Add secret**
- **Name:** `GCP_CREDENTIALS`
- **Value:** [Your GCP service account JSON]
- Click **Add secret**

- **Name:** `SSH_PRIVATE_KEY`
- **Value:** [Your SSH private key content]
- Click **Add secret**

### **Step 3: Create Staging Environment**

1. Click **New environment**
2. **Name:** `staging`
3. **Description:** `Staging environment for pre-production testing`
4. Click **Configure environment**

**Protection Rules:**
- ✅ **Required reviewers:** Add yourself + 1 other person
- ✅ **Wait timer:** 5 minutes
- ✅ **Deployment branches:** `main` branch only

**Environment secrets:**
- Same as dev environment

### **Step 4: Create Production Environment**

1. Click **New environment**
2. **Name:** `prod`
3. **Description:** `Production environment for live users`
4. Click **Configure environment**

**Protection Rules:**
- ✅ **Required reviewers:** Add yourself + 2 other people
- ✅ **Wait timer:** 10 minutes
- ✅ **Deployment branches:** `main` branch only
- ✅ **Prevent self-review:** Enable

**Environment secrets:**
- Same as other environments

## 🔐 **How to Get Your Secrets**

### **GCP Credentials (GCP_CREDENTIALS)**

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click **IAM & Admin** → **Service Accounts**
3. Click **Create Service Account**
4. **Name:** `github-actions-deploy`
5. **Description:** `Service account for GitHub Actions deployments`
6. Click **Create and Continue**
7. **Role:** `Editor` (or `Owner` for full access)
8. Click **Continue** → **Done**
9. Click on the service account you just created
10. Click **Keys** tab → **Add Key** → **Create new key**
11. **Type:** JSON
12. Click **Create**
13. **Copy the entire JSON content** - this is your `GCP_CREDENTIALS`

### **SSH Private Key (SSH_PRIVATE_KEY)**

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Run: `cat ~/.ssh/freshfield_erpnext`
3. **Copy the entire content** - this is your `SSH_PRIVATE_KEY`

## 🚀 **How the Deployment Process Works**

### **For Beginners - Simple Explanation:**

1. **You make changes** to your code
2. **You push to GitHub** (like saving to the cloud)
3. **GitHub automatically**:
   - Tests your code
   - Deploys to Development
   - Waits for your approval
   - Deploys to Staging
   - Waits for approval
   - Deploys to Production

### **The Flow:**
```
Your Code Changes
       ↓
   GitHub Push
       ↓
  Development (Auto)
       ↓
   Your Approval
       ↓
   Staging (Auto)
       ↓
   Team Approval
       ↓
  Production (Auto)
```

## 📱 **How to Deploy (For Beginners)**

### **Method 1: Automatic (Recommended)**
1. Make changes to your code
2. Go to GitHub website
3. Click **Actions** tab
4. Click **Deploy ERPNext to GCP Environments**
5. Click **Run workflow**
6. Select branch: `main`
7. Click **Run workflow**

### **Method 2: Manual Trigger**
1. Go to your repository
2. Click **Actions** tab
3. Find the latest workflow run
4. Click **Re-run jobs** if needed

## 🔍 **How to Monitor Deployments**

### **Check Deployment Status:**
1. Go to **Actions** tab in GitHub
2. Click on any workflow run
3. See the progress in real-time
4. Green checkmarks = Success
5. Red X = Failed (click to see why)

### **Check Your ERPNext:**
- **Development:** http://34.19.98.34:8080
- **Staging:** http://34.169.224.70:8080
- **Production:** http://35.199.145.237:8080

## 🛠️ **Common Issues & Solutions**

### **Issue: "Permission denied"**
**Solution:** Check your SSH key is correct in environment secrets

### **Issue: "GCP credentials invalid"**
**Solution:** Regenerate the service account key

### **Issue: "Workflow failed"**
**Solution:** Click on the failed step to see the error message

## 📚 **Learning Resources for Beginners**

### **GitHub Basics:**
- [GitHub Docs](https://docs.github.com/en/get-started)
- [GitHub Actions Tutorial](https://docs.github.com/en/actions/learn-github-actions)

### **Docker Basics:**
- [Docker for Beginners](https://docs.docker.com/get-started/)

### **Cloud Basics:**
- [Google Cloud Platform Tutorial](https://cloud.google.com/docs/get-started)

## 🎯 **Next Steps After Setup**

1. **Test the deployment** by making a small change
2. **Monitor the first deployment** to see how it works
3. **Learn the GitHub interface** by exploring the Actions tab
4. **Set up notifications** for deployment status
5. **Practice making changes** and deploying them

## 📞 **Getting Help**

### **If You Get Stuck:**
1. **Check the error message** in GitHub Actions
2. **Look at the logs** by clicking on failed steps
3. **Google the error message** - someone else probably had the same issue
4. **Ask for help** in GitHub Discussions or Stack Overflow

### **Emergency Rollback:**
If something goes wrong:
1. Go to **Actions** tab
2. Find the last successful deployment
3. Click **Re-run jobs**
4. This will restore the previous working version

---

**Remember:** Everyone starts as a beginner! The key is to:
- **Start small** and make simple changes first
- **Learn by doing** - try things and see what happens
- **Don't be afraid to break things** - that's how you learn
- **Ask questions** when you get stuck

**You've got this!** 🚀
