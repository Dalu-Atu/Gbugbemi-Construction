function TestimonialSection() {
  const testimonials = [
    {
      name: "Michael Rodriguez",
      title: "Project Manager, State DOT",
      content:
        "Gbubemi Gentle construction delivered our highway project 2 months ahead of schedule and under budget. Their attention to safety and quality is unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      title: "Development Director, Metro Properties",
      content:
        "Working with Gbubemi Gentle construction on our commercial development was seamless. They handled every challenge professionally and delivered exceptional results.",
      rating: 5,
    },
    {
      name: "David Thompson",
      title: "City Engineer",
      content:
        "The bridge reconstruction project exceeded all our expectations. Gbubemi Gentle construction's expertise in complex infrastructure projects is evident in their work.",
      rating: 5,
    },
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-slate-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">Client Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry professionals
            and government officials say about working with Gbubemi Gentle
            construction.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full border-l-4 border-orange-500">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
