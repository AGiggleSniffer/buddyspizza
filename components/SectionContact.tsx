"use client";

import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function SectionContact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission (would connect to backend in production)
		alert("Thanks for reaching out! We'll get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<section id="contact" className="py-20 px-4 bg-secondary h-screen">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl mb-4">Get in Touch</h2>
					<p className="text-xl text-neutral-600">
						Questions? Comments? We&apos;d love to hear from you!
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-3xl mb-6">Visit Us</h3>

						<div className="space-y-6">
							<div className="flex gap-4">
								<MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
								<div>
									<p className="mb-1">123 Main Street</p>
									<p className="text-neutral-600">
										Anytown, ST 12345
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
								<div>
									<p className="mb-1">(555) 123-4567</p>
								</div>
							</div>

							<div className="flex gap-4">
								<Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
								<div>
									<p className="mb-2">Hours:</p>
									<p className="text-neutral-600">
										Monday - Thursday: 11am - 9pm
									</p>
									<p className="text-neutral-600">
										Friday - Saturday: 11am - 10pm
									</p>
									<p className="text-neutral-600">
										Sunday: 12pm - 8pm
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-3xl mb-6">Send a Message</h3>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block mb-2 text-neutral-700"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({
											...formData,
											name: e.target.value,
										})
									}
									className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-neutral-700"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({
											...formData,
											email: e.target.value,
										})
									}
									className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block mb-2 text-neutral-700"
								>
									Message
								</label>
								<textarea
									id="message"
									required
									rows={5}
									value={formData.message}
									onChange={(e) =>
										setFormData({
											...formData,
											message: e.target.value,
										})
									}
									className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
								/>
							</div>

							<button
								type="submit"
								className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition-colors"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
