# Professional Portfolio Website

Selamat datang di portfolio website Anda yang modern, bersih, dan responsif! Website ini dibangun dengan teknologi terkini untuk menampilkan proyek dan keterampilan Anda dengan sempurna.

## Fitur Utama

✨ **Fitur Lengkap:**
- Dark mode dengan toggle yang responsif
- 5 project cards yang dapat diklik untuk melihat detail
- Modal detail project dengan image gallery (4-5 foto per project)
- Link ke GitHub, YouTube, dan Live demo
- Sepenuhnya responsif (Mobile, Tablet, Desktop)
- Smooth animations dan transitions
- Professional dan modern design
- SEO optimized metadata

## 🚀 Cara Memulai

### Setup Awal
```bash
# Install dependencies
pnpm install

# Jalankan dev server
pnpm dev
```

Buka browser dan akses `http://localhost:3000`

## 📝 Cara Customize

### 1. Update Data Personal Anda

**File: `data/projects.ts`**

Edit data projects dengan informasi Anda:
```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Nama Project Anda',
    shortDescription: 'Deskripsi singkat',
    description: 'Deskripsi panjang tentang project...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    images: ['/projects/image-1.png', ...],
    githubLink: 'https://github.com/username/project',
    youtubeLink: 'https://youtube.com/watch?v=...',
    liveLink: 'https://demo-link.com',
  },
  // ... tambah atau ubah project lainnya
]
```

### 2. Update Informasi Kontak

**File: `app/page.tsx`**

Ubah email dan social links di bagian "Let's Work Together":
```typescript
<a href="mailto:your-email@example.com">Send Email</a>
<a href="https://github.com/your-username">GitHub</a>
<a href="https://linkedin.com/in/your-profile">LinkedIn</a>
```

### 3. Update Metadata

**File: `app/layout.tsx`**

Ubah title dan description:
```typescript
export const metadata: Metadata = {
  title: 'Nama Anda - Portfolio',
  description: 'Deskripsi portfolio Anda',
}
```

### 4. Update Hero Section

**File: `components/hero-section.tsx`**

Ubah text "I'm a Creative Developer" dan subtitle sesuai profile Anda.

### 5. Update Skills

**File: `app/page.tsx`**

Ubah skills di section "Skills & Expertise" sesuai keahlian Anda.

## 📱 Struktur Project

```
/app
  ├── page.tsx              # Main page
  ├── layout.tsx            # Root layout dengan metadata
  └── globals.css           # Global styles & design tokens

/components
  ├── navbar.tsx            # Navigation bar dengan dark mode toggle
  ├── hero-section.tsx      # Hero section
  ├── project-card.tsx      # Card untuk menampilkan project
  └── project-modal.tsx     # Modal detail project dengan image gallery

/data
  └── projects.ts           # Data projects dan interface

/public/projects
  └── *.png                 # Gambar-gambar project
```

## 🎨 Customizing Design

### Color Scheme

Design tokens sudah dikonfigurasi di `app/globals.css`. Anda bisa mengubah:
- Primary color
- Background colors
- Text colors
- Border colors

### Fonts

Fonts sudah di-setup dengan Google Fonts (Geist). Anda bisa mengubah di `app/layout.tsx`

## 🌙 Dark Mode

Dark mode sudah fully supported dan menggunakan localStorage untuk persist preference. 
- Automatic detection berdasarkan system preference
- Manual toggle dengan button di navbar

## 📸 Menambah/Mengubah Images

1. Simpan gambar ke folder `/public/projects/`
2. Update path di `data/projects.ts`
3. Pastikan menggunakan format yang optimal (WebP, PNG, atau JPG)

## 🚀 Deploy

### Deploy ke Vercel

Vercel adalah pilihan terbaik untuk deploy Next.js app:

1. Push code ke GitHub
2. Buka https://vercel.com
3. Click "New Project"
4. Connect repository GitHub Anda
5. Click "Deploy"

Vercel akan auto-deploy setiap kali Anda push ke main branch.

### Deploy ke Platform Lain

Website ini compatible dengan hosting providers lain:
- Netlify
- GitHub Pages (dengan SSG)
- Railway
- Render

## 📚 Technologies Used

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization
- **UI Components**: shadcn/ui ready
- **Animations**: CSS & Tailwind transitions

## 🔧 Environment Variables (Optional)

Untuk fitur tambahan (optional):
- Google Analytics
- Email service (untuk contact form)
- API integrations

## 📋 Checklist Sebelum Deploy

- [ ] Update semua informasi personal (nama, email, links)
- [ ] Update semua project data dengan info yang benar
- [ ] Ganti/update semua gambar project
- [ ] Update skills & expertise Anda
- [ ] Test dark mode
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test semua project links (GitHub, YouTube, Live demo)
- [ ] Test social links (Email, GitHub, LinkedIn)

## 🤝 Feedback & Support

Jika ada pertanyaan atau butuh help, silakan:
1. Check dokumentasi Next.js: https://nextjs.org
2. Check Tailwind CSS docs: https://tailwindcss.com
3. Check shadcn/ui: https://ui.shadcn.com

## 📄 License

Silakan gunakan template ini untuk portfolio pribadi Anda!

---

**Happy coding! Semoga portfolio Anda sukses menginspirasi!** 🚀
