/**
 * Dương Football Portfolio — Interactivity Scripts
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --------------------------------------------------------------------------
       0. Dynamic Grid Generation (All Images in Directory)
       -------------------------------------------------------------------------- */
    const jerseyImages = [
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855440801_a0ac2c7526b3020cb902f7aa19bb530a.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855440892_561fe664159c5491d32d57d2d3e9de79.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855442133_f70401cb649c962238a3311f93531f20.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855446667_ffbcce3c8fa4d4870dfa5872e6d67fcd.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855449992_6190d688f77f30cd8690435355df5a66.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855450114_5685e100cde58d155599923dae69abea.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855453549_a85bd144beb12bb25d070bdaa2ebf19b.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855454927_93346e5ac318cff8469fe03e6ec03792.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855455720_072c191cd97bc384984ca262e94cb7db.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855457450_59c59ca3d62f1d1af604588132425155.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855457644_8ec4e65fd24fb5018484951d48f555e0.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855460714_16d9d6e94432d6f3ef00511a43f5d4d5.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855467026_2004c940d463aabd51e5efd9d3d37e1f.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855467127_483489b01d14f37b629db5ccd4a4697d.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855467301_c5bd6db6a5d836aed908e9099fc04df0.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855468207_2ddd78931d0dea580c79dc6ae76ca52a.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855471169_0a5d79f830a782f027dd979954fc0138.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855472009_2c5a8748a73346a05394d8f081df25a3.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855472648_b11155fe4c34ee9c56f5d917c0dd0c54.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855474113_4c61b0da460fc0f3db6281a9c6047285.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-h-z7876855479003_174e628220c28a230e30f9d397308dd7.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-n-z7876855452632_d946b30aceaf4cd647166d4e5c59e470.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-o-z7876855440993_2807d1748d0b9bbc8dc5608ac415b029.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-o-z7876855441800_94f48b368735bb72155d90e377870a39.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-o-z7876855447077_91a9273376a2538384e16c7ad9003240.jpg",
        "assets/images/bo-suu-tap/ao-dau/gen-o-z7876855447898_fa4eee143ba07278d13c50a2e0c46907.jpg"
    ];

    const signatureImages = [
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876855466098_cb53fe87c792a10f76b8f2ec12d2653b.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859101090_d8554aca88205b2c779acf1ddda714b6.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859103554_496353da179b01599ebd7ffb27324ebb.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859107045_0ed61e4fe31df2c60c5edc83a18c0050.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859109147_7a5bf6f63cc792989bea982b8313f7d5.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859113852_5fc95254c8f8cd6b55354e9957904f76.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-h-z7876859114559_250105cc43ba0dcb72b7f3d6dd9583bb.jpg",
        "assets/images/bo-suu-tap/chu-ky/gen-n-z7876859104214_2bd527212629da10143dd5b92bb6042e.jpg"
    ];

    const collectionGrid = document.getElementById('collectionGrid');
    const galleryGrid = document.getElementById('galleryGrid');

    if (collectionGrid) {
        let collectionHTML = '';
        let index = 0;
        jerseyImages.forEach((src) => {
            const delayClass = index % 3 === 1 ? 'delay-1' : (index % 3 === 2 ? 'delay-2' : '');
            collectionHTML += `
                <div class="collection-item reveal ${delayClass}" data-category="jersey">
                    <div class="collection-img-box">
                        <img src="${src}" alt="" class="collection-img" loading="lazy">
                        <div class="gallery-overlay">
                            <span class="zoom-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            `;
            index++;
        });
        signatureImages.forEach((src) => {
            const delayClass = index % 3 === 1 ? 'delay-1' : (index % 3 === 2 ? 'delay-2' : '');
            collectionHTML += `
                <div class="collection-item reveal ${delayClass}" data-category="signature">
                    <div class="collection-img-box">
                        <img src="${src}" alt="" class="collection-img" loading="lazy">
                        <div class="gallery-overlay">
                            <span class="zoom-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            `;
            index++;
        });
        collectionGrid.innerHTML = collectionHTML;
    }

    if (galleryGrid) {
        let galleryHTML = '';
        let index = 0;
        const allImages = [...jerseyImages, ...signatureImages];
        allImages.forEach((src) => {
            const delayClass = index % 4 === 1 ? 'delay-1' : (index % 4 === 2 ? 'delay-2' : (index % 4 === 3 ? 'delay-3' : ''));
            galleryHTML += `
                <div class="gallery-item reveal ${delayClass}">
                    <img src="${src}" alt="" class="gallery-img" loading="lazy">
                    <div class="gallery-overlay">
                        <span class="zoom-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                    </div>
                </div>
            `;
            index++;
        });
        galleryGrid.innerHTML = galleryHTML;
    }

    /* --------------------------------------------------------------------------
       1. Global Elements
       -------------------------------------------------------------------------- */
    const navbar = document.querySelector('.navbar-header');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    /* --------------------------------------------------------------------------
       2. Sticky Header & Back-To-Top Button
       -------------------------------------------------------------------------- */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* --------------------------------------------------------------------------
       3. Mobile Navigation Menu Toggle
       -------------------------------------------------------------------------- */
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when nav-link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    /* --------------------------------------------------------------------------
       4. Scroll Reveal Animations (Intersection Observer)
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('.reveal');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    /* --------------------------------------------------------------------------
       5. Active Navigation Link Scroll Tracking
       -------------------------------------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    
    if ('IntersectionObserver' in window) {
        const activeNavObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.4,
            rootMargin: '-80px 0px -40% 0px'
        });
        
        sections.forEach(sec => activeNavObserver.observe(sec));
    }

    /* --------------------------------------------------------------------------
       6. Collection Categorical Filtering
       -------------------------------------------------------------------------- */
    const filterButtons = document.querySelectorAll('.filter-btn');
    const collectionItems = document.querySelectorAll('.collection-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            collectionItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.classList.add('revealed');
                    }, 50);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    /* --------------------------------------------------------------------------
       7. Image Lightbox for Collection & Gallery
       -------------------------------------------------------------------------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentImages = []; // List of images currently active for next/prev sliding
    let currentImgIndex = 0;

    const openLightbox = (imagesList, index) => {
        currentImages = imagesList;
        currentImgIndex = index;
        
        const data = currentImages[currentImgIndex];
        if (!data) return;

        lightboxImg.src = data.src;
        lightboxImg.alt = data.alt;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        if (currentImages.length === 0) return;
        currentImgIndex = (currentImgIndex + 1) % currentImages.length;
        openLightbox(currentImages, currentImgIndex);
    };

    const prevImage = () => {
        if (currentImages.length === 0) return;
        currentImgIndex = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
        openLightbox(currentImages, currentImgIndex);
    };

    // Bind Collection Grid items
    const setupCollectionLightbox = () => {
        const collectionGrid = document.querySelector('.collection-grid');
        if (!collectionGrid) return;
        
        collectionGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.collection-item');
            if (!item) return;

            // Get all currently visible collection items (filtered)
            const visibleItems = Array.from(document.querySelectorAll('.collection-item:not(.hidden)'));
            const imagesList = visibleItems.map(vi => {
                const img = vi.querySelector('.collection-img');
                return { src: img.src, alt: img.alt || '' };
            });

            const index = visibleItems.indexOf(item);
            openLightbox(imagesList, index);
        });
    };

    // Bind Gallery Grid items
    const setupGalleryLightbox = () => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const imagesList = Array.from(galleryItems).map(gi => {
                    const img = gi.querySelector('.gallery-img');
                    return { src: img.src, alt: img.alt };
                });
                openLightbox(imagesList, index);
            });
        });
    };

    // Initialize Lightboxes
    setupCollectionLightbox();
    setupGalleryLightbox();

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-image-box')) {
            closeLightbox();
        }
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });
    
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    // Keyboard controls support
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowRight') {
                nextImage();
            } else if (e.key === 'ArrowLeft') {
                prevImage();
            }
        }
    });
});
