import { FaGithub, FaLinkedin } from "react-icons/fa"
import logo from "/Logo.png"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const imdbLogoURL = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"

  return (
    <footer className="p-8 border-t-gray-900 border-t-2 border-dashed">
      <div className="flex flex-col md:flex-row gap-8 justify-between items-center w-full max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-4 items-center">
          <img
            src={logo}
            className="h-24"
          />

          <p>
            Copyright &copy; {currentYear} FlixVault, Tiago Andrade
          </p>

          <ul className="flex gap-4 text-3xl w-max">
            <li title="LinkedIn">
              <a href="https://www.linkedin.com/in/andrade-tiago" target="_blank">
                <FaLinkedin />
              </a>
            </li>
            <li title="GitHub">
              <a href="https://github.com/andrade-tiago" target="_blank">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 max-w-96">
          <img
            className="max-h-12"
            src={imdbLogoURL}
            alt="IMDb logo"
          />

          <p className="text-gray-500">
            Esta aplicação usa o TMDB e as APIs do TMDB, mas não é endossado, certificado ou aprovado pelo TMDB.
          </p>
        </div>
      </div>
    </footer>
  )
}
