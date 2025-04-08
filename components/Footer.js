import Link from "next/link";
import { Github} from "lucide-react"; // ✅ This line is required!

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <Link href="https://github.com/ruchi079" target="_blank" rel="noopener noreferrer">
          <Github size={18} />
        </Link>
      </div>
    </footer>
  );
}
