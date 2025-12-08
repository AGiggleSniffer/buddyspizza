"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ModeToggle from "@/components/ModeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { BiMenu, BiX } from "react-icons/bi";

export default function Navbar() {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				// Scrolling down
				setIsVisible(false);
			} else {
				// Scrolling up
				setIsVisible(true);
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", controlNavbar);

		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, []);

	return (
		<NavigationMenu
			className={`min-w-full justify-end border-b shadow-md dark:shadow-neutral-900 transition-transform duration-300 ${
				isVisible ? "translate-y-0" : "-translate-y-full"
			} backdrop-filter backdrop-blur-lg`}
		>
			<NavigationMenuList className="p-5 hidden md:flex">
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="#home">Home</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="#menu">Menu</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="#where">Where We Are</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="#about">About Us</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						asChild
						className={navigationMenuTriggerStyle()}
					>
						<Link href="#contact">Contact</Link>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>

			<ModeToggle />

			<Sheet>
				<SheetTrigger className="md:hidden p-5">
					<BiMenu className="text-3xl" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader className="hidden">
						<SheetTitle>Navigation</SheetTitle>
						<SheetDescription>
							Navigate to different parts of the website
						</SheetDescription>
					</SheetHeader>
					<NavigationMenuList className="flex-col min-h-screen justify-start mt-15">
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<SheetClose asChild>
									<Link href="#home">Home</Link>
								</SheetClose>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<SheetClose asChild>
									<Link href="#menu">Menu</Link>
								</SheetClose>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<SheetClose asChild>
									<Link href="#where">Where We Are</Link>
								</SheetClose>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<SheetClose asChild>
									<Link href="#about">About Us</Link>
								</SheetClose>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								asChild
								className={navigationMenuTriggerStyle()}
							>
								<SheetClose asChild>
									<Link href="#contact">Contact</Link>
								</SheetClose>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</SheetContent>
			</Sheet>
		</NavigationMenu>
	);
}
