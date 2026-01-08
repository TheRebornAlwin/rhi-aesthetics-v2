# Skin Lesion Removal Landing Page - Implementation Plan

## 🔍 Industry Standards Analysis

### What Top Competitors Are Doing (That We Need)

Based on analysis of 10+ top clinics in London, LA, and NYC:

#### ✅ **Common Winning Patterns:**
1. **Emotional Headlines** - Focus on outcomes, not procedures ("Minimal Scarring & Maximum Precision", "Be Healthy and Confident")
2. **Multiple CTAs** - Book Appointment buttons appear 3-5 times on page
3. **Before/After Galleries** - 8-12 high-quality comparison images (critical for conversion)
4. **Trust Signals** - Board certifications, years of experience, patient count
5. **Clear Pricing** - Most show starting prices or intro offers upfront
6. **FAQ Sections** - 10-15 questions addressing common fears
7. **Video Content** - Some have procedure explanation videos
8. **Location/Contact Info** - Prominent phone numbers and addresses
9. **Social Proof** - 50+ testimonials with photos and full names
10. **Pain/Scarring Reassurance** - Dedicated sections addressing #1 fear

#### ❌ **What We're Currently Missing:**
- Multi-page routing (all content in one component)
- Dedicated skin lesion removal content
- Intro offer prominently featured (£49 for 1-2 lesions)
- Video testimonials or procedure explanations
- Live chat or immediate contact options
- Mobile-optimized booking flow
- Schema markup for SEO
- Page speed optimization (<3s load time)
- Accessibility features (WCAG 2.1 AA)

---

## 📋 PHASE 1: MANUAL TASKS (User Only)

### Task 1.1: Prepare Before/After Images
**What you need to do:**
- [ ] Collect 12-15 before/after images for skin lesion removal
- [ ] Ensure images show: moles, skin tags, warts, age spots
- [ ] Name files descriptively: `lesion-mole-face-before.jpg`, `lesion-mole-face-after.jpg`
- [ ] Upload to your image hosting service
- [ ] Provide URLs in this format:

```
BEFORE/AFTER IMAGE URLS:
1. Face mole - Before: [URL] | After: [URL]
2. Neck skin tag - Before: [URL] | After: [URL]
3. Hand age spot - Before: [URL] | After: [URL]
... (continue for all 12-15 pairs)
```

### Task 1.2: Provide Testimonials
**What you need to do:**
- [ ] Collect 9-12 testimonials from skin lesion removal patients
- [ ] Each testimonial needs:
  - Full quote (2-4 sentences, emotional, specific results)
  - First name + Last initial (e.g., "Sarah B.")
  - What they had removed (e.g., "Facial Mole", "Neck Skin Tags")
  - Optional: Their photo

Format:
```
TESTIMONIALS:
1. Quote: "[Full testimonial]"
   Name: "Sarah B."
   Treatment: "Facial Mole Removal"
   Photo URL (optional): [URL]

... (continue for all)
```

### Task 1.3: Fresha Booking Link
**What you need to do:**
- [ ] Create/update Fresha service for "Skin Lesion Consultation" or "£49 Intro Offer"
- [ ] Get the booking URL with pre-selected service
- [ ] Provide URL here:

```
FRESHA BOOKING URL: [paste full URL]
```

### Task 1.4: Review & Approve Copy (After Claude generates it)
**What you need to do:**
- [ ] Read through all copy Claude writes
- [ ] Check it sounds human, not AI (commas, natural flow, emotion)
- [ ] Approve or request changes
- [ ] Provide any specific claims/stats you want included (e.g., "300+ lesions removed", "98% satisfaction rate")

---

## 🤖 PHASE 2: CLAUDE CODE IMPLEMENTATION

### Prompt 2.1: Setup Routing & Page Structure
**Send this to Claude Code:**

```
I need you to set up multi-page routing for the site. Here's what to do:

1. Install react-router-dom if not already installed
2. Create a new folder: src/pages/
3. Move current App.tsx content into: src/pages/PlasmaFibroblastPage.tsx
4. Create new file: src/pages/SkinLesionRemovalPage.tsx (empty component shell for now)
5. Update App.tsx to be a router with these routes:
   - "/" → redirects to "/skin-lesion-removal" (default)
   - "/skin-lesion-removal" → SkinLesionRemovalPage
   - "/plasma-fibroblast" → PlasmaFibroblastPage
6. Keep the footer component shared between pages
7. Make sure all existing Plasma Fibroblast functionality still works on /plasma-fibroblast
8. Test that navigation works and commit changes

Important: Don't break anything on the plasma fibroblast page. Just add routing infrastructure.
```

**Wait for Claude to complete before next prompt.**

---

### Prompt 2.2: Build Skin Lesion Removal Page (Full Implementation)
**Send this to Claude Code:**

```
Now build the complete Skin Lesion Removal landing page at /skin-lesion-removal

Reference the target market research in target-market-research.md and competitor analysis screenshots.

## Page Structure & Copy Requirements:

### 1. HERO SECTION
- Headline addressing their #1 desire: confidence without the mole/lesion
- Subheadline speaking to their fear: "No scary surgery, minimal scarring, back to life in days"
- 2 CTAs: "Book £49 Intro Offer" + "See Before/After Results"
- Background: warm, welcoming image (use placeholder for now)

### 2. INTRO OFFER SECTION (High prominence, right after hero)
- Big headline: "Try It Risk-Free: £49 for 1-2 Small Lesions"
- Bullet points:
  * Test our skill & see results yourself
  * No commitment to more treatments
  * Same expert care, special intro price
  * See exactly how your skin heals
- CTA: "Claim Your £49 Offer"

### 3. "WHY PEOPLE AVOID GETTING IT DONE" SECTION
Address their fears directly with empathy:
- "Worried it'll hurt?" → We numb completely, most feel nothing
- "Scared of scarring?" → Show healing process, minimal marks
- "Think it costs £500+?" → That's other clinics, we're £49-£149
- "Don't know if it can be removed?" → Free consultation, honest answers
- "Afraid of the NHS turning you away?" → We specialize in cosmetic removal

### 4. BEFORE/AFTER GALLERY
- Grid of 12 comparison sliders (use placeholder images for now)
- Each labeled with: "Facial Mole - 3 Weeks Post-Treatment"
- Make it MASSIVE, this is the conversion section

### 5. HOW IT WORKS (3-Step Process)
- Consultation: "We examine it, answer everything, no pressure"
- Treatment: "15-30 mins, completely numbed, you'll barely feel it"
- Healing: "Few days of tiny scabs, then clear skin - we guide you through it"

### 6. WHAT WE REMOVE
- Moles (raised & flat)
- Skin tags
- Age spots
- Warts
- Milia (milk spots)
- Cherry angiomas
- Seborrheic keratoses

### 7. "MEET RHIA" (Same as plasma page, keep the trust)

### 8. MASSIVE TESTIMONIALS SECTION
- 9 testimonials (use placeholders from plasma page, I'll replace)
- Each with: quote, name, what they had removed, 5 stars
- Focus on: confidence boost, painless, quick healing, affordable

### 9. PRICING SECTION
- £49: 1-2 small lesions (intro offer)
- £99: 3-4 lesions
- £149: 5-6 lesions
- Note: "Consultation always free, no obligation"

### 10. FAQ (15 questions minimum)
Address these fears from the research:
- Does it hurt?
- Will it scar?
- How much does it cost?
- What if it's cancerous?
- How long is healing?
- Can I wear makeup after?
- Will it come back?
- Do you check if it's safe to remove?
- What if the NHS rejected me?
- Is it painful to remove skin tags?
- Will there be a mark where the mole was?
- How long does the procedure take?
- Do I need time off work?
- What if I have multiple moles?
- Can you remove moles on my face?

### 11. FINAL CTA
- Emotional close: "Imagine looking in the mirror tomorrow and feeling genuinely confident"
- Two CTAs: "Book £49 Intro Offer" + "Ask Rhia a Question" (WhatsApp)

## Design Requirements:

### Colors & Vibe:
- Warmer than plasma page (less clinical, more welcoming)
- Use softer teals/greens + warm neutrals
- Lots of white space, friendly, approachable
- NOT sterile medical - more "friendly expert"

### Copy Tone:
- Write like Rhia is speaking directly to them
- Use "I", "you", "we" (personal, not corporate)
- Short paragraphs, conversational
- Address fears directly and empathetically
- NO medical jargon
- Mix sentence lengths: some long with commas, some punchy and short
- Show emotion: "I get it, seeing that mole every day is frustrating"

### Mobile-First:
- Everything readable on mobile
- CTAs thumb-friendly (48px min height)
- Before/after images work on small screens

### SEO Basics:
- Page title: "Skin Lesion & Mole Removal Southampton | £49 Intro Offer | RHI Aesthetics"
- Meta description addressing their pain + offer
- H1: Use emotional headline
- H2s: for each section

## Placeholder Content:
- Use placeholder images for before/afters (clearly label "Placeholder")
- Use placeholder testimonials (mark them as "Sample - Will Replace")
- Use "#" for Fresha booking links (I'll provide real URL)

## What NOT to do:
- Don't copy the plasma page design exactly
- Don't use medical terminology
- Don't be salesy or pushy
- Don't make fake claims
- Don't forget the £49 offer prominently

Build this page, test it locally, take screenshots with Playwright, and show me what you've created.
```

**Wait for Claude to build and show you the page.**

---

### Prompt 2.3: Optimization & Final Polish
**After reviewing the page, send this:**

```
Let's optimize and polish the skin lesion removal page:

1. **Performance Audit:**
   - Use Playwright to run Lighthouse audit
   - Optimize images (lazy loading, WebP)
   - Ensure page loads under 3 seconds
   - Fix any accessibility issues (color contrast, alt text, focus states)

2. **Mobile Testing:**
   - Screenshot the page on mobile viewport (375x667)
   - Test all CTAs are clickable
   - Ensure images don't overflow
   - Check text is readable (min 16px)

3. **Cross-Browser Check:**
   - Test on Chromium (via Playwright)
   - Ensure no layout breaks

4. **SEO Improvements:**
   - Add schema.org markup for LocalBusiness
   - Add FAQ schema
   - Add meta tags for social sharing (Open Graph, Twitter)
   - Create sitemap.xml including both pages

5. **Conversion Optimization:**
   - Add exit-intent popup with "Wait! £49 offer for first-timers"
   - Add floating WhatsApp button (mobile only)
   - Add "Back to top" button for long page
   - Ensure CTAs appear every 2 screen heights

6. **Analytics Setup:**
   - Add event tracking for CTA clicks (using existing Meta Pixel)
   - Track scroll depth
   - Track time on page

Show me before/after Lighthouse scores and any issues you fixed.
```

---

## 🧪 PHASE 3: TESTING CHECKLIST

### User Acceptance Testing (You do this):
- [ ] Page loads on /skin-lesion-removal
- [ ] All content reads naturally (human voice, not AI)
- [ ] £49 offer is prominently featured
- [ ] Before/after placeholders are clearly marked
- [ ] Testimonial placeholders are marked
- [ ] All CTAs say "Book £49 Intro Offer" or "Free Consultation"
- [ ] Mobile view looks good (test on your phone)
- [ ] Footer is identical to plasma page
- [ ] /plasma-fibroblast still works perfectly
- [ ] "/" redirects to /skin-lesion-removal

### Claude's Automated Testing:
- [x] Playwright screenshots of full page
- [x] Mobile viewport testing
- [x] Lighthouse performance score (target: 90+)
- [x] Accessibility score (target: 95+)
- [x] All links functional
- [x] All images have alt text
- [x] No console errors
- [x] Meta tags present

---

## 📊 PHASE 4: CONTENT REPLACEMENT

### Prompt 4.1: Replace Placeholder Images
**After you provide real image URLs, send this:**

```
Replace all placeholder images with real before/after photos:

[Paste your image URL list here]

Make sure each before/after pair has:
- Descriptive labels
- Consistent styling
- Lazy loading enabled
- WebP format with JPG fallback

Commit as "Add real before/after images for skin lesion removal"
```

### Prompt 4.2: Replace Placeholder Testimonials
**After you provide real testimonials, send this:**

```
Replace all placeholder testimonials with real patient feedback:

[Paste your testimonial list here]

Ensure each testimonial:
- Feels authentic (keep their exact words)
- Shows the treatment type
- Has proper formatting
- Includes star rating

Commit as "Add real patient testimonials for skin lesion removal"
```

### Prompt 4.3: Update Fresha Booking Links
**After you provide Fresha URL, send this:**

```
Update all booking links to use the real Fresha URL:

FRESHA URL: [paste your URL]

Replace on:
- All "Book £49 Intro Offer" buttons
- All "Book Free Consultation" buttons
- Header booking button

Commit as "Update booking links for skin lesion removal"
```

---

## 🚀 PHASE 5: DEPLOYMENT & MONITORING

### Pre-Launch Checklist:
- [ ] All placeholder content replaced
- [ ] User tested on mobile device
- [ ] All CTAs go to correct Fresha link
- [ ] Spelling/grammar checked
- [ ] Social media preview looks good (share on WhatsApp to test)
- [ ] Google Search Console submitted both URLs

### Post-Launch (Within 48 hours):
- [ ] Check Google Analytics for traffic
- [ ] Monitor Meta Pixel for conversions
- [ ] Test Fresha bookings are coming through
- [ ] Ask 2-3 friends to review the page for clarity

### Week 1 Optimizations:
- [ ] A/B test different hero headlines (if you want)
- [ ] Add more testimonials as they come in
- [ ] Update before/after gallery with new results

---

## 🎯 SUCCESS METRICS (MVP Goals)

### Technical:
- ✅ Page loads under 3 seconds
- ✅ Mobile-friendly (Google's test)
- ✅ Accessibility score 95+
- ✅ No broken links/images

### Business:
- 🎯 10+ bookings in first month
- 🎯 2%+ conversion rate (visitors → bookings)
- 🎯 Average 2-3 minutes time on page
- 🎯 <40% bounce rate

---

## 📚 Reference Materials

### Competitor Screenshots:
- `competitor-LA-Mole-Removal.png` - Full page design
- `competitor-NYC-Wall-Street-Derm.png` - Hero section
- `competitor-MACS-Clinic-London.png` - Layout reference

### Target Market:
- `target-market-research.md` - Full audience analysis

### Copy Inspiration:
**Headlines that convert:**
- "Finally, remove that mole you've been covering up for years"
- "£49 to test if this is right for you - no commitment, just results"
- "I know you're scared it'll hurt. Let me show you why it won't."

**Key phrases to use:**
- "I get it" / "I understand"
- "You're not stuck with it"
- "No judgment, just honest answers"
- "Most feel absolutely nothing"
- "It's gone in minutes, healed in days"

---

## 🔄 FUTURE ENHANCEMENTS (Post-MVP)

### Phase 2 (Month 2-3):
- [ ] Add video testimonials
- [ ] Create "Healing Timeline" with day-by-day photos
- [ ] Add Instagram feed integration
- [ ] Build quiz: "What type of lesion do I have?"

### Phase 3 (Month 3-6):
- [ ] Online consultation booking calendar
- [ ] Patient portal for aftercare photos
- [ ] Referral program page
- [ ] Blog for SEO (5-10 articles)

---

## ❓ QUESTIONS? BLOCKERS?

If you hit issues during implementation:

1. **Can't decide on copy tone?** → Read 3 testimonials out loud. Write like they talk.
2. **Design looks too similar to plasma page?** → Reference the LA competitor's warm, friendly vibe.
3. **Not sure about pricing display?** → Show £49 offer BIG, others in table below.
4. **Claude's code breaks something?** → Tell Claude: "Revert to last working version and try a different approach."
5. **Page feels too long?** → It should be. Long-form converts better for high-consideration purchases.

---

## 🎉 FINAL NOTES

**This is an MVP.** Perfect is the enemy of done. Get it live with placeholder content, then replace as real content comes in.

**The £49 offer is your secret weapon.** Make it impossible to miss. Put it high up, repeat it often.

**Copy is 80% of conversion.** Spend time making it sound like Rhia talking to a friend, not a sales pitch.

**Before/afters sell themselves.** Once you have real images, they'll do most of the heavy lifting.

**Speed matters.** Get this live in 48 hours, then iterate based on real user feedback.

---

## 📝 IMPLEMENTATION TRACKER

```
[ ] Phase 1: Manual Tasks Complete
    [ ] Task 1.1: Images prepared
    [ ] Task 1.2: Testimonials collected
    [ ] Task 1.3: Fresha link obtained
    [ ] Task 1.4: Copy reviewed & approved

[ ] Phase 2: Claude Code Implementation
    [ ] Prompt 2.1: Routing setup
    [ ] Prompt 2.2: Page build
    [ ] Prompt 2.3: Optimization

[ ] Phase 3: Testing Complete
    [ ] User acceptance tests passed
    [ ] Claude automated tests passed

[ ] Phase 4: Content Replacement
    [ ] Prompt 4.1: Real images added
    [ ] Prompt 4.2: Real testimonials added
    [ ] Prompt 4.3: Fresha links updated

[ ] Phase 5: Deployment
    [ ] Pre-launch checklist complete
    [ ] Site live and monitored
    [ ] Week 1 optimizations done

🚀 READY TO LAUNCH!
```

---

**Let's build this. Start with Phase 1 manual tasks, then I'll handle the rest.**
