
import Socials from '@/components/Socialss';
import Section from '@/container/Section';

type Props = any;

export default function Footer(props: Props) {
  return (
    <Section elevated={false} className='   z-0    body-font flex 
    justify-center py-10   text-white'>
      <div className='  border-t-3 border-dashed border-lime-500'>
        <div className='  flex  flex-col items-center   '>
          <a href='/' className='title-font cursor-pointer  font-medium    '>
            <img src='/favicon.ico' className='w-12' />
          </a>

          <p className='max-w-sm md:max-w-lg text-center text-xs '>
            Designed loosely in{" "}
            <a className="text-lime-500" href="https://www.figma.com/" target="_blank">
              Figma
            </a>{" "}
            and coded in{" "}
            <a className="text-lime-500" href="https://code.visualstudio.com/" target="_blank">
              VS Code
            </a>{" "}
            by yours very truly,built using{" "}
            <a className="text-lime-500" href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            and{" "}
            <a className="text-lime-500" href="https://tailwindcss.com/" target="_blank">
              tailwindcss
            </a>
            , deployed to{" "}
            <a className="text-lime-500"
              href="https://firebase.google.com/products/hosting"
              target="_blank"
            >
              Firebase hosting
            </a>
            .
            <br />
            Text is in the{" "}
            <a className="text-lime-500" href="https://github.com/tonsky/FiraCode" target="_blank">
              FiraCode
            </a>{" "}
            typeface
          </p>
          <p className='mt-4 text-sm font-bold '>
            &copy;  {new Date().getFullYear()} Younes Megaache
          </p>
        </div>
      </div>
    </Section>
  );
}
