import useTranslations from '@hooks/useTranslations';

export default function Hero(): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // Component States / Variables / Constants
    // ----------------------------------------------------------------------------------------------------
    const { t } = useTranslations();

    // ----------------------------------------------------------------------------------------------------
    // Main Component Body UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <div className="text-center py-24 font-mono">
            <h1 className="text-6xl">{t.Hello_World}</h1>
            <p className="mx-auto text-slate-700 dark:text-slate-300 mt-4 text-md">{t.Hero_Description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-cyan-900 dark:text-cyan-500 font-bold mt-6 cursor-pointer">
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Next.js</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Typescript</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">TailwindCSS</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">JEST</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">ESLint</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Prettier</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Axios & useSWR</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Dark / Light Mode</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">Multi-lang</p>
                <p className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl hover:underline">RTL</p>
            </div>
            <p className="mx-auto text-slate-700 dark:text-slate-300 mt-20">
                {t.Developed_By}:{' '}
                <a
                    href="https://github.com/3adel-bassiony"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-600 hover:underline"
                >
                    Adel Bassiony
                </a>
            </p>
        </div>
    );
}
