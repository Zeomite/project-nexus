import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <section>
        <h2>Our Story</h2>
        <p>Step into Hungry Haveli and be transported to a world where tradition meets innovation. Our story is one of passion for authentic Indian cooking, where recipes handed down through generations are infused with contemporary twists to create unforgettable dining experiences.</p>
    </section>
    
    <section>
        <h2>Our Cuisine</h2>
        <p>At Hungry Haveli, we take pride in offering a diverse menu that caters to all palates. From mouthwatering curries to sizzling tandoori dishes, each item on our menu is crafted with care using the finest ingredients and spices sourced locally and from India.</p>
        <p>Whether you&apos;re craving the fiery heat of a vindaloo or the comforting warmth of a creamy butter chicken, our menu has something to tantalize every taste bud.</p>
    </section>
    
    <section>
        <h2>Our Ambiance</h2>
        <p>Experience the warmth of Indian hospitality as you dine in our inviting and elegant space. Adorned with vibrant colors and traditional accents, Hungry Haveli provides the perfect setting for family gatherings, intimate dinners, or casual get-togethers.</p>
        <p>Our friendly staff is dedicated to ensuring that your dining experience is nothing short of exceptional, from the moment you walk in until the last bite is savored.</p>
    </section>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:++919999992121">
            +91 9999992121
          </a>
        </div>
      </section>
    </>
  )
}
