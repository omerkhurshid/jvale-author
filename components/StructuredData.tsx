export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jvale-author.vercel.app/#author",
        "name": "J. Vale",
        "description": "Fantasy author of The Veilbound Saga series",
        "url": "https://jvale-author.vercel.app",
        "sameAs": [],
        "jobTitle": "Author",
        "knowsAbout": ["Fantasy Literature", "Creative Writing", "The Veilbound Saga"],
        "alumniOf": {
          "@type": "Organization",
          "name": "Writer"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://jvale-author.vercel.app/#website",
        "url": "https://jvale-author.vercel.app",
        "name": "J. Vale - Fantasy Author",
        "description": "Official website of J. Vale, author of The Veilbound Saga fantasy series",
        "publisher": {
          "@id": "https://jvale-author.vercel.app/#author"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Book",
        "@id": "https://jvale-author.vercel.app/#marked-by-moonfire",
        "name": "Marked by Moonfire",
        "author": {
          "@id": "https://jvale-author.vercel.app/#author"
        },
        "description": "Book One of The Veilbound Saga. When ancient magic awakens in her blood, Lyra must choose between the safety of ignorance and the perilous path of power.",
        "genre": "Fantasy",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "BookSeries",
          "name": "The Veilbound Saga"
        }
      },
      {
        "@type": "Book",
        "@id": "https://jvale-author.vercel.app/#shattered-world",
        "name": "Shattered World: The First Gate",
        "author": {
          "@id": "https://jvale-author.vercel.app/#author"
        },
        "description": "The veil between worlds grows thin, and only those marked by moonfire can stand against the coming darkness.",
        "genre": "Fantasy",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "BookSeries",
          "name": "The Veilbound Saga"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}