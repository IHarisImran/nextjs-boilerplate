export const StringToSlug = string => { return string.toLowerCase().replace(/[\s,'’“”;:."|]+/g, '-') };

export const generate8DigitCode = () => { return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('') };

export const GetServerURL = () => { return (location.hostname === "localhost") ? process.env.DEV_SERVER_HOST : process.env.LIVE_SERVER_HOST };

export const getMetadata = ({ title, desc }) => {
    const siteName = process.env.HOST,
        image = `${siteName}assets/images/branded/social-share-image.jpg`,
        favicon = `${siteName}assets/images/branded/favicon.webp`;

    return {
        metadataBase: new URL(siteName),
        title: title,
        description: desc,
        openGraph: {
            images: [{ url: image, width: 1200, height: 630, }],
            title: title,
            description: desc,
            url: siteName,
            type: 'website',
            siteName: 'Content Tale',
            locale: 'en-US'
        },
        twitter: {
            title: title,
            description: desc,
            images: { url: [image], alt: 'Content Tale', },
            card: 'summary_large_image'
        },
        applicationName: 'Content Tale',
        authors: [{ name: 'Muhammed Haris', url: 'https://www.linkedin.com/in/iharisimran/' }],
        creator: 'Muhammed Haris',
        icons: { icon: favicon, shortcut: favicon, apple: favicon, other: { rel: favicon, url: favicon, } }
    };
};

export const formatDateTime = (str) => {
    if (!str) return;
    const utcDateTime = new Date(str),
        options = {
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric',
        },
        localDateTime = utcDateTime.toLocaleString(undefined, options);

    const date = new Date(localDateTime).getDate(),
        month = new Date(localDateTime).getMonth() + 1,
        year = new Date(localDateTime).getFullYear(),
        minutes = new Date(localDateTime).getMinutes();
    let hours = new Date(localDateTime).getHours(),
        timezone = new Date(localDateTime).toLocaleString('en-US', { timeZoneName: 'short' }).split(' ')[2];

    if (hours >= 12) {
        timezone = 'PM';
        hours = hours - 12;
    } else { timezone = 'AM' };

    return `${pad(date)}/${pad(month)}/${year} ${pad(hours == '00' ? '12' : hours)}:${pad(minutes)} ${timezone}`;
}; const pad = e => { return e.toString().padStart(2, 0) };

export const responseMaker = ({ success, response }) => { return { success, response } };