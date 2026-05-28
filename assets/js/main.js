/**
 * Dương Football Portfolio — Interactivity Scripts
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

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
        // Prevent body scrolling when mobile menu is open
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
                    // Stop observing once animated in
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
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
            rootMargin: '-80px 0px -40% 0px' // accounts for header and viewport offset
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
            // Update active filter button class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            collectionItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden');
                    // Re-trigger scroll reveal styling to ensure they stay visual
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
       7. Collection Detail Modal Functionality
       -------------------------------------------------------------------------- */
    // Detailed dataset mapping for 6 collection items
    const collectionData = [
        {
            title: "Áo Đấu Ký Ronaldinho (Barcelona)",
            category: "Chữ Ký Thần Tượng",
            image: "assets/images/gen-h-z7876824789620_ec57b9998b6f78eadfc4402f4ab3ce2b.jpg",
            description: "Chiếc áo đấu Barcelona mang chữ ký tay nguyên bản cực kỳ sắc nét của 'Ảo thuật gia sân cỏ' Ronaldinho Gaúcho. Kỷ vật này được Rayan trực tiếp săn đón thành công trong chuyến ghé thăm đặc biệt của R10 đến Hà Nội vào năm 2024. Được chiêm ngưỡng nụ cười bất diệt của anh bên ngoài và chạm tay vào chữ ký thiêng liêng này là khoảnh khắc đáng nhớ nhất tuổi trẻ.",
            special: "Đây là chiếc áo đấu có chữ ký đầu tiên và được trân trọng đặt ở vị trí trang trọng nhất trong tủ trưng bày của Dương."
        },
        {
            title: "Áo Đấu Ký Rivaldo (World Cup 2002)",
            category: "Chữ Ký Huyền Thoại",
            image: "assets/images/gen-h-z7876824783483_cb2ad9fa675709371d74308fd5988aa1.jpg",
            description: "Mẫu áo đấu ký bởi danh thủ Rivaldo - chủ nhân Quả bóng Vàng 1999 và linh hồn của chức vô địch World Cup 2002 của ĐT Brazil. Được Rayan trực tiếp sưu tập khi huyền thoại người Brazil cùng các cựu danh thủ đến thi đấu giao hữu tại SVĐ Quốc Gia Mỹ Đình vào năm 2023. Từng nét mực in đậm dấu ấn kiêu hùng của một thế hệ vàng.",
            special: "Chữ ký tay chân thực do Rivaldo ký bằng tay trái cực kỳ điệu nghệ ngay trước sảnh SVĐ."
        },
        {
            title: "Áo Đấu Argentina World Cup 2022",
            category: "Áo Đấu Cổ Điển",
            image: "assets/images/gen-h-z7876824773399_16a24b4b016aec8b34fb505b1036b36d.jpg",
            description: "Áo đấu sọc xanh trắng nguyên bản của ĐTQG Argentina trong đêm đăng quang lịch sử tại SVĐ Lusail, Qatar (World Cup 2022). Chiếc áo mang tên và số đấu huyền thoại của Lionel Messi - người đã hoàn tất bộ sưu tập danh hiệu vĩ đại nhất lịch sử bóng đá thế giới.",
            special: "Thiết kế in sẵn logo ba ngôi sao vô địch vàng rực rỡ và huy hiệu FIFA World Champions chính hãng."
        },
        {
            title: "Áo Đấu Man United Champions League 2008",
            category: "Áo Đấu Retro",
            image: "assets/images/gen-h-z7876824774925_daa175f908c45dd2bb7835081f065f9f.jpg",
            description: "Chiếc áo đỏ retro tái hiện lại đêm mưa Moscow huyền ảo năm 2008 khi Quỷ Đỏ Manchester United đánh bại Chelsea trên loạt sút luân lưu cân não để lên ngôi vương UEFA Champions League. Mẫu áo in tên Cristiano Ronaldo gắn liền với cú bật nhảy ghi bàn không tưởng trong trận chung kết.",
            special: "Mẫu áo kinh điển của thế hệ bóng đá vàng thời thơ ấu, lưu trữ những kỷ niệm không thể nào quên."
        },
        {
            title: "Poster Nghệ Thuật Lionel Messi",
            category: "Ấn Phẩm Sưu Tầm",
            image: "assets/images/gen-h-z7876824778647_fa96df3c7336dca46f64a0405f3589de.jpg",
            description: "Poster vải canvas chất lượng cao, khắc họa những khoảnh khắc ăn mừng thăng hoa tột cùng của huyền thoại Lionel Messi trong màu áo Blaugrana Barcelona. Thiết kế mang phong cách poster thể thao nghệ thuật hiện đại với những mảng màu tương phản rực rỡ.",
            special: "Điểm nhấn đầy cá tính truyền cảm hứng mạnh mẽ về khát vọng vươn lên mỗi ngày tại không gian trưng bày cá nhân."
        },
        {
            title: "Tập Bộ Vé Trận Đấu Kỷ Niệm",
            category: "Vé Trận Đấu Lịch Sử",
            image: "assets/images/gen-h-z7876824781106_aea5f91a478c4af21d27733b1a83e713.jpg",
            description: "Bộ sưu tập gồm nhiều cuống vé giấy lịch sử của các trận đấu giao hữu, vòng loại World Cup tại SVĐ Mỹ Đình và các sự kiện bóng đá giao lưu có huyền thoại ghé thăm Hà Nội từ năm 2023 đến 2026. Mỗi cuống vé là một tấm hộ chiếu thời gian đưa Rayan trở lại với bầu không khí cuồng nhiệt trên khán đài.",
            special: "Kỷ vật chân thực lưu trữ những bước chạy rực lửa trực tiếp trước mắt của các danh thủ huyền thoại."
        }
    ];

    const collectionModal = document.getElementById('collectionModal');
    const modalImg = document.getElementById('modalImg');
    const modalCat = document.getElementById('modalCat');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalSpecial = document.getElementById('modalSpecial');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = collectionModal.querySelector('.modal-backdrop');
    const detailButtons = document.querySelectorAll('.btn-detail');

    const openCollectionModal = (index) => {
        const item = collectionData[index];
        if (!item) return;

        modalImg.src = item.image;
        modalImg.alt = item.title;
        modalCat.textContent = item.category;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.description;
        modalSpecial.innerHTML = `<strong>Đặc biệt:</strong> ${item.special}`;

        collectionModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeCollectionModal = () => {
        collectionModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-item'));
            openCollectionModal(index);
        });
    });

    modalClose.addEventListener('click', closeCollectionModal);
    modalBackdrop.addEventListener('click', closeCollectionModal);

    /* --------------------------------------------------------------------------
       8. Gallery Lightbox Modal Functionality
       -------------------------------------------------------------------------- */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');

    let currentGalleryIndex = 0;
    const galleryImages = [];

    // Initialize list of images in gallery for fast sliding navigation
    galleryItems.forEach((item, index) => {
        const img = item.querySelector('.gallery-img');
        const caption = item.querySelector('.gallery-caption').textContent;
        galleryImages.push({
            src: img.src,
            alt: img.alt,
            caption: caption
        });

        item.addEventListener('click', () => {
            currentGalleryIndex = index;
            openLightbox(index);
        });
    });

    const openLightbox = (index) => {
        const data = galleryImages[index];
        if (!data) return;

        lightboxImg.src = data.src;
        lightboxImg.alt = data.alt;
        lightboxCaption.textContent = data.caption;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    const nextImage = () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryImages.length;
        openLightbox(currentGalleryIndex);
    };

    const prevImage = () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentGalleryIndex);
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        // Close if click on background area outside image/caption/buttons
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
        
        if (collectionModal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeCollectionModal();
            }
        }
    });
});
