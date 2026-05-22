"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Clock, Facebook, Instagram, Leaf, ShieldCheck, Truck, Users, Utensils, Wallet } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="large"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Sugee Veg"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars",
      }}
      logoText="Sugee Veg (सुगी वेग)"
      description="Pure Veg Delights, Freshly Served. Serving delicious vegetarian meals in Undri, Pune with taste, quality & affordability."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Order Online",
          href: "https://swiggy.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-cooked-vegetables-with-egg-meal-seasonings-dark-desk_140725-79691.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="Fresh, Authentic & Family-Friendly"
      description="Located in the heart of Undri, Pune, Sugee Veg is dedicated to bringing pure vegetarian delicacies to your table. We focus on fresh, high-quality ingredients, warm family dining, and budget-friendly pricing."
      subdescription="Our passion for taste and hygiene ensures every meal is a memorable experience for you and your family."
      imageSrc="http://img.b2bpic.net/free-photo/delicious-veggie-dishes-still-life_23-2151160897.jpg"
      mediaAnimation="opacity"
      icon={Utensils}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "m1",
          name: "Sugee Special Jumbo Dosa",
          price: "₹199",
          imageSrc: "http://img.b2bpic.net/free-photo/cardamom-near-fried-potatoes-table_23-2147894880.jpg",
        },
        {
          id: "m2",
          name: "Paneer Butter Masala",
          price: "₹249",
          imageSrc: "http://img.b2bpic.net/free-photo/cod-with-potatoes_123827-37158.jpg",
        },
        {
          id: "m3",
          name: "Hakka Noodles",
          price: "₹179",
          imageSrc: "http://img.b2bpic.net/free-photo/noodles-prepared-with-mushrooms-bell-peppers-sauce_141793-1223.jpg",
        },
        {
          id: "m4",
          name: "Pav Bhaji",
          price: "₹149",
          imageSrc: "http://img.b2bpic.net/free-photo/pav-bhaji-with-butter-cilantro_23-2151996229.jpg",
        },
        {
          id: "m5",
          name: "Bhel Puri",
          price: "₹99",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-multi-colored-meatballs-with-tomato-sauces-green-onions_140725-13961.jpg",
        },
        {
          id: "m6",
          name: "Gobi Manchurian",
          price: "₹169",
          imageSrc: "http://img.b2bpic.net/free-photo/homemade-kung-pao-chicken-with-peppers-vegetables-chinese-food-stir-fry_2829-7180.jpg",
        },
      ]}
      title="Signature Menu"
      description="From traditional South Indian staples to savory Chinese and Indian classics, our menu is designed to please every palate."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Fresh Ingredients",
          description: "Farm-fresh produce used daily.",
          icon: Leaf,
        },
        {
          title: "Budget Friendly",
          description: "Premium dining without breaking the bank.",
          icon: Wallet,
        },
        {
          title: "Fast Service",
          description: "Quick prep for dine-in & delivery.",
          icon: Clock,
        },
        {
          title: "Family Dining",
          description: "Warm and inviting space for families.",
          icon: Users,
        },
        {
          title: "Hygienic Kitchen",
          description: "Sanitized and clean food prep.",
          icon: ShieldCheck,
        },
        {
          title: "Convenient Delivery",
          description: "No-contact doorstep delivery.",
          icon: Truck,
        },
      ]}
      title="Why Choose Sugee Veg?"
      description="Quality meets affordability in every bite."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The best place in Undri for pure vegetarian food! Fresh, delicious, and very budget-friendly. A must-visit family spot."
      rating={5}
      author="Anjali Deshmukh"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-brunette-woman-sitting-with-coffee-using-smartphone-cafe-chatting_1258-199048.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-shot-happy-femaleeats-delicious-sandwich-draws-notebook-with-crayons-works-creative-project-creats-pictures-wears-transparent-glasses-elegant-shirt-vest-poses-against-urban-area_273609-54602.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-hipster-dressed-leather-jacket-eating-vegan-burger_613910-16395.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/would-you-like-some-salad-dear_637285-12955.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/older-woman-with-thumb-up_1149-1162.jpg",
          alt: "Customer",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="opacity"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Experience Sugee Veg"
      description="Capturing our vibrant food and warm ambiance."
      blogs={[
        {
          id: "g1",
          category: "Ambience",
          title: "Our Dining Area",
          excerpt: "Comfortable seating.",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-indian-girl-black-saree-dress-posed-restaurant_627829-1955.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/head-shot-happy-beautiful-young-woman-posing-indoors-looking-camera-smiling_74855-10218.jpg",
          date: "2024",
        },
        {
          id: "g2",
          category: "Food",
          title: "Fresh Plates",
          excerpt: "Quality service.",
          imageSrc: "http://img.b2bpic.net/free-photo/set-fresh-raw-vegetables-products-table-modern-kitchen-room-healthy-eating-organic-food_1157-41855.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/smiling-afro-woman-holds-pumpkin-fall-wears-yellow-protective-raincoat-has-happy-mood-stands-against-blue-background_273609-32896.jpg",
          date: "2024",
        },
        {
          id: "g3",
          category: "Design",
          title: "Modern Interior",
          excerpt: "Clean space.",
          imageSrc: "http://img.b2bpic.net/free-photo/chairs-around-table-fuzzy_1203-1091.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/family-having-nice-thanksgiving-dinner-together_23-2149082402.jpg",
          date: "2024",
        },
        {
          id: "g4",
          category: "Kitchen",
          title: "Hygiene First",
          excerpt: "Clean kitchen.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-chef-kitchen-washing-frying-pan_23-2149646223.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/friends-having-fun-their-reunion_23-2149215767.jpg",
          date: "2024",
        },
        {
          id: "g5",
          category: "Ambience",
          title: "Relaxing Vibe",
          excerpt: "Warm lighting.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-table-assortment-with-plant_23-2148914894.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-smiling-woman-holding-apples-looking-camera_23-2148076026.jpg",
          date: "2024",
        },
        {
          id: "g6",
          category: "Welcome",
          title: "Warm Entrance",
          excerpt: "Come visit us.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-shop-front-with-sign-mockup_53876-63392.jpg",
          authorName: "Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",
          date: "2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Visit Us Today"
      description="📍 Sanket Park 1, Autadwadi Handewadi, Tarawade Vasti, Undri, Pune 411060 | 📞 93591 76699"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/here-take-look-our-menu_637285-7860.jpg"
      buttonText="Reserve Table"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Sugee Veg"
      copyrightText="© 2025 Sugee Veg. All rights reserved."
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Facebook,
          href: "#",
          ariaLabel: "Facebook",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
