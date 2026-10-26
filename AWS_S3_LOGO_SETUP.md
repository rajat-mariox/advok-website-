# AWS S3 Logo Setup Guide

## Quick Setup Steps

### 1. Create S3 Bucket
1. Go to AWS S3 Console
2. Click "Create bucket"
3. Name it something like `advok-assets` or `your-company-assets`
4. Choose a region (us-east-1 for best performance)
5. Uncheck "Block all public access" 
6. Check the warning box and create bucket

### 2. Upload Your Logo
1. Click on your bucket
2. Click "Upload" → "Add files"
3. Upload your `logo-advok.png` file
4. Click "Upload"

### 3. Make Logo Public
1. Click on your uploaded logo file
2. Go to "Permissions" tab
3. Scroll down to "Bucket policy"
4. Click "Edit" and add this policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
        }
    ]
}
```

Replace `YOUR-BUCKET-NAME` with your actual bucket name.

### 4. Update React App
Replace `your-bucket-name` in App.jsx with your actual bucket name:

```jsx
src="https://your-actual-bucket-name.s3.amazonaws.com/logo-advok.png"
```

## Alternative: Use CloudFront (Recommended for Production)

### 1. Create CloudFront Distribution
1. Go to CloudFront Console
2. Click "Create Distribution"
3. Set Origin Domain to your S3 bucket
4. Set Default Root Object to `index.html`
5. Create distribution

### 2. Update URLs
Use CloudFront URL instead:
```jsx
src="https://your-cloudfront-id.cloudfront.net/logo-advok.png"
```

## Logo Requirements
- **Format**: PNG or JPG
- **Size**: 200x200px minimum
- **Background**: Transparent or white
- **Content**: Your trademarked logo with "A" and weighing scale

## Cost
- S3 storage: ~$0.023 per GB per month
- Data transfer: ~$0.09 per GB
- For a logo file (~50KB), costs are negligible

## Security Best Practices
1. Use CloudFront for production
2. Set up proper CORS headers
3. Consider using signed URLs for sensitive assets
4. Enable versioning on your bucket

## Testing
After setup, test your logo URL directly in browser:
`https://your-bucket-name.s3.amazonaws.com/logo-advok.png`

Should display your logo image directly.

