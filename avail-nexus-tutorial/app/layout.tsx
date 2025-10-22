import { NexusProvider } from "@/context/NexusProvider";
import { Web3Provider } from "@/context/Web3Provider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Nexus SDK Tutorial - Part 1: Getting Started",
	description: "Avail Nexus SDKの使い方を学ぶためのチュートリアルです",
	icons: {
		icon: "/avail-logo.svg",
	},
};

/**
 * Root layout component
 * @param param0
 * @returns
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Web3Provider>
					<NexusProvider>{children}</NexusProvider>
				</Web3Provider>
			</body>
		</html>
	);
}
