# 🚀 Deploy Your React Website to AWS

This guide will help you deploy your Advok React website to AWS and make it live.

## 📋 What You Need

1. **AWS Account** - Sign up at [aws.amazon.com](https://aws.amazon.com) (free tier available)
2. **AWS CLI** - Install from [aws.amazon.com/cli](https://aws.amazon.com/cli)
3. **Node.js** - Already installed ✓

## 🎯 Quick Start (5 Minutes)

1. **Configure AWS CLI:**
   ```bash
   aws configure
   ```
   Enter your AWS Access Key ID, Secret Access Key, region, and output format.

2. **Build your website:**
   ```bash
   cd "React website"
   npm install
   npm run build
   ```

3. **Deploy using the script:**
   ```powershell
   .\deploy-to-aws.ps1
   ```
   The script will guide you through the process!

## 📚 Documentation Files

- **`QUICK_START_DEPLOYMENT.md`** - Fastest way to get started (5 minutes)
- **`AWS_DEPLOYMENT_GUIDE.md`** - Complete detailed guide for S3 + CloudFront
- **`EC2_DEPLOYMENT_GUIDE.md`** - Deploy to EC2 instance (if you have one)
- **`CUSTOM_DOMAIN_SETUP.md`** - Set up custom domain with SSL
- **`deploy-to-aws.ps1`** - Automated deployment script (S3)
- **`deploy-to-ec2.ps1`** - Automated deployment script (EC2)

## 🏗️ Deployment Options

### Option 1: S3 + CloudFront (Recommended) ✅
- **Best for**: Static React websites
- **Cost**: $1-5/month (low traffic)
- **Pros**: Cheaper, easier, faster, no server management
- **See**: `AWS_DEPLOYMENT_GUIDE.md`

### Option 2: EC2 Instance
- **Best for**: Need server-side features, already have EC2
- **Cost**: $7-20/month
- **Pros**: Full server control, can run backend APIs
- **See**: `EC2_DEPLOYMENT_GUIDE.md`

**For a static React website, S3 + CloudFront is recommended, but EC2 works great if you already have one!**

## 💰 Cost Estimate

- **Low traffic**: $1-5/month
- **Medium traffic**: $10-20/month
- **High traffic**: $50-100/month

Most costs come from CloudFront data transfer. S3 storage is very affordable.

## 🔧 Manual Deployment

If you prefer manual steps:

1. Create S3 bucket in AWS Console
2. Enable static website hosting
3. Set bucket policy for public access
4. Upload files from `dist/` folder
5. Access via S3 website endpoint

See `AWS_DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🔄 Updating Your Website

### For S3 + CloudFront:
```bash
npm run build
.\deploy-to-aws.ps1 -BucketName your-bucket-name
```

### For EC2:
```bash
npm run build
.\deploy-to-ec2.ps1 -EC2Host your-ec2-ip -KeyPath path/to/key.pem
```

## 🆘 Need Help?

- Check `AWS_DEPLOYMENT_GUIDE.md` for troubleshooting
- AWS Documentation: https://docs.aws.amazon.com
- AWS Support: https://aws.amazon.com/support

## ✅ Next Steps After Deployment

1. ✅ Test your website URL
2. ✅ Set up CloudFront for HTTPS (recommended)
3. ✅ **Configure custom domain** - See `CUSTOM_DOMAIN_SETUP.md` for detailed guide
4. ✅ Set up monitoring (optional)
5. ✅ Enable CloudFront access logs (optional)

## 🌐 Custom Domain Setup

Want to use your own domain (e.g., `advokus.com`)? 

**See `CUSTOM_DOMAIN_SETUP.md`** for complete step-by-step instructions including:
- SSL certificate setup (FREE from AWS)
- CloudFront configuration
- DNS configuration for all major providers
- Troubleshooting guide

---

**Ready to deploy? Start with `QUICK_START_DEPLOYMENT.md`! 🚀**



