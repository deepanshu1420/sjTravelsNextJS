import ReviewCarousel from "@/components/review-carousel"

export default function ReviewsSection() {
  return (
    <section
      className="mb-20 py-16 px-4 rounded-3xl bg-gradient-to-r from-gray-900 to-indigo-950"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">Testimonials</span>
        <h2 className="text-4xl font-bold text-white mt-2">What Our Customers Say</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full mx-auto mt-4"></div>
      </div>
      <ReviewCarousel />
    </section>
  )
}

