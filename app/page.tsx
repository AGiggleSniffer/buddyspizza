"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionMenu from "../components/SectionMenu";
import SectionSpecials from "../components/SectionSpecials";
import SectionGallery from "../components/SectionGallery";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans">
			<Navbar />
			<main className="mx-auto w-full">
				<Hero />
				{/* <SectionMenu /> */}
				{/* <SectionSpecials /> */}
				{/* <SectionGallery /> */}
				{/* <SectionAbout /> */}
				{/* <SectionContact /> */}
			</main>
			<Footer />
		</div>
	);
}
