# Image brief: OEM Sourcing Ltd website

**Status: done.** All 12 images were generated. The six in `img/` are live on the site (hero-A, sourcing-A,
inspection-A, interpreting-B, logistics-A, guangzhou-A). The other six are kept in `img-candidates/` as WebP
(`hero-b`, `sourcing-b`, `inspection-b`, `interpreting-a`, `logistics-b`, `guangzhou-b`) so any of them can be swapped in
by copying it to `img/` under the live name (for example `img-candidates/hero-b.webp` to `img/hero.webp`).

The rest of this file is the original brief, kept as a record of the prompts used.

**For the agent that generates the images. Do everything in this file, in order.**

The site is a one-page website for OEM Sourcing Ltd, a purchasing agency in Guangzhou, China. It helps small
businesses and foreign buyers source products, inspect factories and goods, and hire interpreters. The photos must
look like real documentary photography, calm and trustworthy, not stock-photo glossy and not AI-looking.

## What to produce: 12 images

6 pictures, **2 variants each** (A and B). The variants differ in scene and composition, not just wording.

| # | Name | Shape to generate | Where it appears |
| --- | --- | --- | --- |
| 1 | `hero` | portrait 2:3 (1024x1536) | Top of the page, beside the headline |
| 2 | `sourcing` | landscape 3:2 (1536x1024) | "Sourcing 360" service card |
| 3 | `inspection` | landscape 3:2 (1536x1024) | "Factory and merchandise inspection" card |
| 4 | `interpreting` | landscape 3:2 (1536x1024) | "Interpreting services" card |
| 5 | `logistics` | landscape 3:2 (1536x1024) | Wide banner above "How it works" |
| 6 | `guangzhou` | landscape 3:2 (1536x1024) | Faded background of the contact section |

Use the highest quality setting the tool offers. Generate each prompt below once per variant.

## Style block: add this to the end of EVERY prompt

> Photorealistic documentary photograph, natural light, shot on a 35mm lens, realistic skin, fabric and material textures, natural imperfections. No text, no logos, no watermarks, no readable signs, no brand names. Natural hands with the correct number of fingers. Not an illustration, not CGI, not a 3D render.

## Prompts

### 1. hero (portrait). Keep faces and the main action in the vertical middle half. On phones the photo is cropped to a landscape strip.

**hero-A**
> A Chinese sourcing agent (woman in her 30s, smart casual blazer) and a foreign business buyer (man in his 40s, shirt sleeves rolled up) stand at a long white table in a bright, modern factory showroom in Guangzhou, looking together at product samples: home goods, small electronics and bags. She holds a tablet. Confident, friendly mood. Soft daylight from large windows, medium shot at eye level, shallow depth of field.

**hero-B**
> A Chinese sourcing agent (man in his 30s, polo shirt and lanyard) walks with a foreign female buyer (in her 30s, linen jacket) along a clean, bright factory aisle, pointing at products on a shelf while she takes notes on her phone. Natural light from skylights, calm and professional, medium shot, shallow depth of field.

### 2. sourcing (landscape). Keep the subject in the centre.

**sourcing-A**
> A clean, modern factory production line in Guangdong, China. Workers in white uniforms and caps assemble consumer products at long workbenches under bright overhead lights. Orderly and professional, shallow depth of field, wide shot.

**sourcing-B**
> Close-up of a factory worker's hands packing finished products into a neat carton on a bench, rows of identical packaged products stacked behind, a modern factory floor softly blurred in the background. Bright, clean light.

### 3. inspection (landscape). Keep the subject in the centre.

**inspection-A**
> A quality control inspector in a high-visibility vest and white gloves checks product samples and cartons in a warehouse. They hold a clipboard checklist and a measuring caliper. Rows of boxes in the background. Concentrated, professional mood.

**inspection-B**
> Close-up from slightly above of gloved hands measuring and examining a product sample on a table next to an open carton of identical products and a clipboard with a checklist. A second inspector is softly blurred in the background. Even, bright warehouse light.

### 4. interpreting (landscape). Keep the people in the centre.

**interpreting-A**
> Two international business people walk with a Chinese interpreter through the aisles of a large trade fair hall in Guangzhou. Product booths on both sides, visitor lanyards with blank badges, bright convention-centre lighting, candid moment, the interpreter gesturing as they explain something.

**interpreting-B**
> A foreign buyer and a Chinese interpreter stand at a stall in a busy but orderly wholesale market in Guangzhou, examining goods on the counter while the vendor talks with them. Daytime, lively, warm natural light, candid.

### 5. logistics (landscape). The image is shown as a wide strip, so the top and bottom 22% are cropped. Keep the important subjects in the vertical middle half.

**logistics-A**
> A container port in southern China at golden hour. Stacked shipping containers, gantry cranes and a large container ship at the dock. Cinematic warm light, wide shot.

**logistics-B**
> Aerial view of a container terminal in southern China at sunrise. Neat rows of colourful containers, gantry cranes, a truck hauling a container along the quay, soft light and light haze.

### 6. guangzhou (landscape). Text sits over this image, so keep it calm, low contrast, with open space in the upper half.

**guangzhou-A**
> The Guangzhou skyline at blue hour with the Canton Tower, city lights reflecting on the Pearl River. Long exposure, smooth water, calm and clear. Open sky in the upper half.

**guangzhou-B**
> Early morning over the Pearl River in Guangzhou with the Canton Tower and the city skyline in soft haze and warm light, a single boat on the water. Calm, spacious, gentle contrast.

## Quality check on every image

Look at each result before saving it. Regenerate (up to 2 extra tries per prompt) if you see: extra or missing fingers,
warped faces or hands, garbled or readable text, logos, a plastic or glossy AI look, or people who look unnatural.
If it still isn't clean after 3 tries, keep the best one and say so in the manifest.

## Files to hand back

1. Save every image as **WebP**, quality about 80, longest side at most 1600 px (hero: at most 1800 px tall), in a
   new folder `img-candidates/`, named exactly:
   `hero-a.webp`, `hero-b.webp`, `sourcing-a.webp`, `sourcing-b.webp`, `inspection-a.webp`, `inspection-b.webp`,
   `interpreting-a.webp`, `interpreting-b.webp`, `logistics-a.webp`, `logistics-b.webp`, `guangzhou-a.webp`,
   `guangzhou-b.webp` (12 files, each ideally under 400 KB).
2. Write `img-candidates/MANIFEST.md`: a table with one row per file: file name, the exact prompt used, which tool and
   model made it, how many tries it took, and any flaw you noticed.
3. Write `img-candidates/contact-sheet.html`: a simple page showing all 12 images in a grid, each labelled with its
   file name, A and B side by side, so they can be compared at a glance.

## Rules

- Do not edit `index.html`, `README.md` or anything in `img/`. Only add the `img-candidates/` folder.
- Do not add the original full-size PNGs to the repo.
- Commit with the message "Add image candidates" and push to the branch `ccr-1abea930-vkpaj0` of this repository.
- When finished, reply with the file list and any images you are not happy with.
