# IMPLEMENTATION_UPDATE.OFFICE: Ο Χώρος Θεραπείας Carousel Section

This implementation plan outlines the introduction of a new office space carousel section immediately before the FAQ section.

## Proposed Changes

### [src/App.tsx](file:///Users/michael/CODING%20LESSONS/ermeion-website/src/App.tsx)

#### 1. Define Office Images
We will define an array of the provided office images:
```typescript
const officeImages = [
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/grafeio.webp",
    alt: "Γραφείο υποδοχής και αξιολόγησης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/gym.webp",
    alt: "Χώρος θεραπευτικής άσκησης και αποκατάστασης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/gym2.webp",
    alt: "Εξοπλισμός θεραπευτικής εκγύμνασης"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/office3.webp",
    alt: "Σύγχρονος εξοπλισμός φυσικοθεραπείας"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/office4.webp",
    alt: "Λεπτομέρεια χώρου θεραπείας"
  },
  {
    url: "https://dcmekuaqoafogwlgnugs.supabase.co/storage/v1/object/public/Office%20images/therapy-office.webp",
    alt: "Κύριο δωμάτιο φυσικοθεραπείας και χειροθεραπείας"
  }
];
```

#### 2. Create `OfficeCarouselSection` Component
We will create a custom component `OfficeCarouselSection` containing:
- **Header**:
  - Title: `"Ο Χώρος Θεραπείας"`
  - Subtitle: `"Ένας σύγχρονος, πλήρως εξοπλισμένος και φιλόξενος χώρος σχεδιασμένος για τη δική σας άνεση και αποκατάσταση."`
- **Carousel Engine**:
  - Uses Framer Motion's `AnimatePresence` and `motion.img` to perform slide translations.
  - Smooth animation transitions between images.
  - Interactive navigation controls (Left / Right Chevron buttons) and bottom dot indicators.
  - Responsive sizing: Images will be beautifully sized (e.g., fixed aspect ratio `aspect-[16/9]`, maximum width, object-cover) to ensure high-fidelity appearance across mobile, tablet, and desktop devices.
  - Auto-play option (with pause on hover) to keep the page dynamic.

#### 3. Integrate into main `App` Component
We will insert `<OfficeCarouselSection />` right before `<FAQSection />` inside the main `App` layout.

```tsx
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <InsuranceCarouselSection />
      <WhyErmeionSection />
      <TestimonialsSection />
      <ProcessSection />
      <RecoverySystemSection />
      <WhyChooseSection />
      <OfficeCarouselSection /> {/* <-- Inserted here */}
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
```

## Verification Plan

### Manual Verification
- Deploy/start local development server using `npm run dev`.
- Visually verify layout placement before the FAQ section.
- Test carousel navigation using the next/previous controls and dot indicators.
- Inspect responsive behavior on mobile and desktop viewports.
