# Email Integration Setup Instructions

## 🎯 Setup Overview
Your website now has integrated email functionality using:
- **Substack** for newsletter (unlimited free subscribers)
- **EmailJS** for contact form (200 emails/month free)

## 📧 Step 1: Set Up EmailJS (Contact Form)

### 1.1 Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free account
3. Verify your email

### 1.2 Add Email Service
1. Go to "Email Services" → "Add New Service"
2. Choose your email provider (Gmail recommended)
3. Connect your email account
4. Note down the **Service ID**

### 1.3 Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Sent from J Vale Author Website
```

3. Save and note the **Template ID**

### 1.4 Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 📰 Step 2: Set Up Substack (Newsletter)

### 2.1 Create Substack Account
1. Go to [substack.com](https://substack.com/)
2. Sign up and create your publication
3. Choose name: "The Veilbound Chronicles" or similar
4. Set up your profile

### 2.2 Get Substack URL
1. Your Substack URL will be: `https://yourname.substack.com`
2. Note this URL

## 🔧 Step 3: Configure Environment Variables

### 3.1 Update .env.local
Replace the placeholders in `.env.local` with your actual values:

```bash
# EmailJS Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx

# Substack Configuration (for newsletter)
NEXT_PUBLIC_SUBSTACK_URL=https://yourname.substack.com
```

### 3.2 Vercel Environment Variables
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the same variables from above

## 🧪 Step 4: Test Your Setup

### 4.1 Test Contact Form
1. Go to `/contact` on your website
2. Fill out and submit the form
3. Check your email for the message

### 4.2 Test Newsletter Signup
1. Go to `/newsletter` on your website
2. Enter an email and submit
3. Should redirect to your Substack signup page

## 🎨 Step 5: Customize Substack

### 5.1 Branding
- Upload your author photo
- Use your brand colors (dark purple/gold theme)
- Write an engaging description

### 5.2 Welcome Email
Set up an automated welcome email for new subscribers

### 5.3 Content Planning
- Weekly/monthly updates
- Behind-the-scenes content
- Chapter previews
- Writing progress updates

## 🔄 Alternative: Direct Substack Embed

If you prefer, you can also embed Substack's form directly:

1. Go to your Substack dashboard
2. Settings → Publication details
3. Copy the embed code
4. Replace the newsletter form with the embed

## 🆘 Troubleshooting

**Contact form not working?**
- Check EmailJS service is active
- Verify environment variables are set
- Check browser console for errors

**Newsletter not redirecting?**
- Verify Substack URL is correct
- Make sure environment variable is set in Vercel

**Need help?**
- EmailJS docs: [docs.emailjs.com](https://www.emailjs.com/docs/)
- Substack help: [support.substack.com](https://support.substack.com/)

## 💰 Cost Breakdown
- **Contact Form**: FREE (200 emails/month)
- **Newsletter**: FREE (unlimited subscribers)
- **Total Monthly Cost**: $0 🎉

Your email system will handle thousands of subscribers and messages completely free!