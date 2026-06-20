# 🎨 Panduan Customization Portfolio

Dokumen ini membantu Anda customize portfolio sesuai kebutuhan.

## 1️⃣ Update Informasi Personal

### Langkah 1: Update Nama & Email
**File**: `app/page.tsx`

Cari section "Let's Work Together" dan ubah:
```typescript
// Ubah email Anda
<a href="mailto:your-email@example.com">Send Email</a>

// Ubah GitHub profile
<a href="https://github.com/yourusername">GitHub</a>

// Ubah LinkedIn profile  
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

### Langkah 2: Update Hero Text
**File**: `components/hero-section.tsx`

Ubah line:
```typescript
// Dari
I&apos;m a Creative Developer

// Menjadi
I&apos;m a [Judul Job Anda]  // Contoh: Full Stack Developer, UI/UX Designer, dll
```

## 2️⃣ Manage Projects

### Menambah Project Baru
**File**: `data/projects.ts`

```typescript
{
  id: 6,  // Increment ID
  title: 'Nama Project Baru',
  shortDescription: 'Deskripsi singkat (max 2 baris)',
  description: 'Deskripsi panjang dengan detail lengkap tentang project...',
  technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'],
  images: [
    '/projects/project-1.png',
    '/projects/project-2.png',
    '/projects/project-3.png',
    '/projects/project-4.png',
    '/projects/project-5.png', // Min 4, Max 5 images
  ],
  githubLink: 'https://github.com/username/project-name',
  youtubeLink: 'https://youtube.com/watch?v=video-id',
  liveLink: 'https://demo.example.com',
}
```

### Mengubah Project Existing
Cari project by ID dan update field yang ingin diubah.

### Menghapus Project
Hapus object project dari array atau ubah `id` jika ingin temporary disable.

## 3️⃣ Update Images

### Menambah Images untuk Project
1. Siapkan image (PNG, JPG, WebP recommended)
2. Simpan ke folder `/public/projects/`
3. Contoh: `/public/projects/myproject-1.png`
4. Update path di `data/projects.ts`

### Tips Gambar Terbaik
- **Ukuran**: Min 800x600px, Max 2000x1200px (untuk performa)
- **Format**: PNG atau WebP (lossless), JPG untuk foto (lossy)
- **Naming**: Gunakan lowercase dengan hyphen: `project-name-1.png`
- **Sequence**: Urutan images = urutan tampil di carousel

## 4️⃣ Update Skills

**File**: `app/page.tsx` - Section "Skills & Expertise"

```typescript
// Frontend
<li>React & Next.js</li>
<li>TypeScript</li>
<li>Tailwind CSS</li>
<li>Responsive Design</li>

// Backend
<li>Node.js</li>
<li>PostgreSQL</li>
<li>MongoDB</li>
<li>RESTful APIs</li>

// Tools & Others
<li>Git & GitHub</li>
<li>Docker</li>
<li>Firebase</li>
<li>Problem Solving</li>
```

## 5️⃣ Customize Design

### Primary Color
**File**: `app/globals.css`

Cari section `:root` dan ubah `--primary`:
```css
--primary: oklch(0.205 0 0);  /* Ubah value ini */
```

### Dark Mode Colors
Cari section `.dark` dan ubah colors yang ingin diubah.

### Typography
**File**: `app/layout.tsx`

Ubah font dari Geist ke font lain dari Google Fonts.

## 6️⃣ Update Social Links Icons

**File**: `app/page.tsx`, `components/project-card.tsx`, `components/project-modal.tsx`

Sekarang menggunakan `ExternalLink` icon. Jika ingin custom:
1. Import icon dari lucide-react yang tersedia
2. Replace dalam JSX code

Available icons: Check https://lucide.dev

## 7️⃣ Metadata & SEO

**File**: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Nama Anda | Developer Portfolio',  // Max 60 char
  description: 'Deskripsi singkat tentang Anda (150-160 char)',
}
```

## 8️⃣ Features & Settings

### Dark Mode
- Automatic: Detect system preference
- Manual: Toggle dengan button di navbar
- Persist: Disimpan di localStorage dengan key `theme`

### Responsive Design
- Mobile: 375px width
- Tablet: 768px width  
- Desktop: 1920px width
- All breakpoints: Mobile-first approach

### Performance
- Image optimization dengan Next.js `Image` component
- CSS minification otomatis
- Code splitting otomatis

## 9️⃣ Testing Checklist

Sebelum deploy:
- [ ] Update semua project data
- [ ] Ganti semua placeholder images
- [ ] Test semua project modal & image carousel
- [ ] Verify semua links (GitHub, YouTube, Live demo)
- [ ] Test dark mode toggle
- [ ] Test responsive di mobile (375px)
- [ ] Test responsive di tablet (768px)
- [ ] Test responsive di desktop (1920px)
- [ ] Check metadata & page title

## 🔟 Deploy Instructions

### Deploy ke Vercel (Recommended)

1. Push ke GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Deploy:
   - Buka https://vercel.com
   - Click "New Project"
   - Select repository GitHub Anda
   - Click "Deploy"

### Custom Domain
- Vercel automatic setup custom domain
- Follow instructions di Vercel dashboard

### Environment Variables (jika ada)
Add di Vercel project settings → Environment Variables

---

## 📚 Helpful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vercel Deployment](https://vercel.com/docs)

## ❓ FAQ

**Q: Berapa banyak projects yang optimal?**
A: 5-6 projects cukup untuk menunjukkan skills. Terlalu banyak bisa overwhelming.

**Q: Perlu update images?**
A: Ya, gunakan screenshot atau video demo dari project asli Anda.

**Q: Bisa custom lebih lanjut?**
A: Ya! Code well-organized, silakan explore dan modify sesuai kebutuhan.

**Q: Perlu hosting berbayar?**
A: Vercel gratis untuk personal projects, dengan bandwidth unlimited.

---

Happy customizing! 🚀
