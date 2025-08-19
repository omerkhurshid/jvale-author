'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Star } from 'lucide-react'

export default function RivenfallAcademySamplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-12 px-4 relative overflow-hidden">
      {/* Magical Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Runes */}
        <div className="absolute top-20 left-10 text-blue-300/20 text-6xl animate-pulse" style={{animationDelay: '0s'}}>ᚱ</div>
        <div className="absolute top-40 right-20 text-purple-300/20 text-4xl animate-pulse" style={{animationDelay: '2s'}}>ᚢ</div>
        <div className="absolute bottom-40 left-20 text-cyan-300/20 text-5xl animate-pulse" style={{animationDelay: '4s'}}>ᚾ</div>
        <div className="absolute top-60 left-1/2 text-blue-300/20 text-3xl animate-pulse" style={{animationDelay: '1s'}}>ᛖ</div>
        <div className="absolute bottom-20 right-10 text-purple-300/20 text-4xl animate-pulse" style={{animationDelay: '3s'}}>ᛊ</div>
        
        {/* Magical Sparkles */}
        <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-96 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-80 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping" style={{animationDelay: '3.5s'}}></div>
        
        {/* Magical Mist */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/books/rivenfall-academy"
            className="inline-flex items-center gap-2 text-blue-200/80 hover:text-blue-100 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Book Details
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="text-blue-300" size={24} />
            <h1 className="text-4xl md:text-5xl font-bold rivenfall-title">
              Sample Reading
            </h1>
            <Star className="text-blue-300" size={24} />
          </div>
          
          <p className="text-blue-100/80 text-lg mb-6">
            The first few pages from <span className="font-semibold text-white">The Chains That Bind</span>
          </p>
          
          <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-400/30 rounded-full px-6 py-2">
            <BookOpen size={16} className="text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Chapter One Preview</span>
          </div>
        </motion.div>

        {/* Book Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/80 via-blue-900/60 to-indigo-900/80 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          {/* Chapter Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Chapter One</h2>
            <h3 className="text-2xl md:text-3xl font-light text-blue-200 italic">Hollowmere</h3>
            
            {/* Decorative Line */}
            <div className="flex items-center justify-center mt-6 mb-8">
              <div className="w-16 h-px bg-blue-400/40"></div>
              <div className="mx-4 text-blue-400 text-xl">❋</div>
              <div className="w-16 h-px bg-blue-400/40"></div>
            </div>
          </div>

          {/* Story Text */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-blue-50/90 leading-relaxed space-y-6 text-lg">
              <p>
                The millwheel turned lazy circles in the morning mist, each spoke catching droplets that scattered like silver coins. I counted seventeen rotations while hauling the grain sacks, because counting helped when something crawled under my skin—dreams of iron chains thick as tree trunks, the taste of metal coating my tongue each morning, sharp and wrong.
              </p>
              
              <p>
                For weeks, this restlessness had been growing. When I woke, metal always lingered on my tongue, cold as winter air.
              </p>
              
              <p>
                I paused to fidget with the smooth pebble in my pocket, rolling it between my fingers. The stone was warm from my body heat, worn smooth by months of nervous handling. Father said I'd rubbed it down to nothing if I kept at it, but the familiar weight helped when thoughts tumbled too fast to catch.
              </p>
              
              <p>
                Hollowmere hadn't changed in the twelve years I'd lived here. Thatched roofs sagged under autumn rain, their peaks crowned with moss that glowed faintly in the early light. The bell tower leaned slightly east as if listening for something beyond the village bounds. The forest edge stayed exactly where it had always been—a wall of green that no one crossed without proper reason and daylight to guide them home.
              </p>
              
              <p>
                The cobblestones beneath my feet were slick with dew, worn smooth by generations. My boots—too big, inherited from Father—squelched with each step as I dragged another sack toward the grinding stones. The work was honest enough, turning grain into flour that would feed families who had lived here since before anyone could remember.
              </p>
              
              <p>
                I was nobody special in Hollowmere. Just Rowan Ashbourne, the miller's apprentice.
              </p>
              
              <p>
                Father ground grain from dawn to dusk without complaint. Mother tended her small herb garden and hummed old songs while she worked. Both seemed content with their quiet life.
              </p>
              
              <p>
                Most days, that suited me fine. Today felt different, like storm clouds gathering just beyond sight.
              </p>
              
              <p>
                The wounded rook found me by the millrace, where the wheel's overflow created a small pond thick with green moss. One wing dragged through the shallows, black feathers slick with mud and something darker that might have been blood. The bird struggled against the current, its bright eye fixed on mine with intelligence too keen for a simple forest creature.
              </p>
              
              <p>
                Most folk would have let it drown. Grandmother always said injured birds brought ill luck to those foolish enough to meddle with nature's way. Better to let the forest take what belonged to it.
              </p>
              
              <p>
                But that bright eye held mine, desperate and aware. My chest tightened with feeling I couldn't name. As if the rook and I shared some secret that neither could speak aloud.
              </p>
              
              <p>
                I could walk away. Should walk away. The grain sacks needed moving, and Father would wonder what kept me so long by the millrace. But something about the bird's struggle called to me in a way I couldn't ignore. The choice was mine to make.
              </p>
              
              <p>
                <em>I made it deliberately.</em>
              </p>
              
              <p>
                Setting down my grain sack, I waded into the millrace with purpose. One, two, three—the water was shockingly cold, autumn fed and sharp enough to steal warmth through my thick woolen stockings. Four, five, six—the rook didn't fight when I reached for it, just settled against my palms like it had been waiting for exactly this moment.
              </p>
              
              <p>
                Its heartbeat fluttered quick as a trapped moth against my fingers. I could feel the delicate bones beneath wet feathers, the desperate heat of its small body fighting to stay alive. One wing bent wrong, twisted at an angle that made my shoulder ache in sympathy.
              </p>
              
              <p>
                "I don't know if I can help you," I whispered to the bird, "but I have to try."
              </p>
              
              <p>
                Without thinking, I began to hum—a tune I'd never learned but somehow knew, notes that seemed to rise from somewhere deeper than memory. The melody felt ancient, like something passed down through generations of people who worked with their hands and understood the quiet rhythms of simple, honest labor.
              </p>
              
              <p>
                Warmth flowed from my chest through my arms to my fingertips, a tingling sensation that made my teeth ache in a strangely pleasant way. The rook's breathing slowed. Its head tilted, black eyes studying my face as if it could see through skin and bone to whatever lay beneath. Around us, the morning grew strangely still. The millwheel stopped turning. The whisper of wind through oak leaves faded to nothing. Even the constant background murmur of village life fell away until there was only my voice and the bird's steady heartbeat.
              </p>
              
              <p>
                The magic—for I somehow knew that's what it was—felt as natural as breathing. It flowed through me like water finding its course, seeking the twisted bone and coaxing it back to wholeness. I felt the exact moment when the wing straightened, not with a snap but with a gentle settling, like a puzzle piece finding its proper place.
              </p>
              
              <p>
                When I looked up, Bran Calder stood gaping from the mill steps, flour dusting his leather apron and his usually ruddy face gone pale as fresh cheese.
              </p>
              
              <p>
                "Rowan," he said, voice thick with wonder and worry both. "What did you just do?"
              </p>
              
              <p>
                I glanced down at the rook in my hands. Its wing had straightened, not healed exactly but no longer bent at that terrible angle. The frantic panic had drained from its eyes, replaced by something that looked uncomfortably like gratitude. It regarded me with patient attention of a scholar examining an interesting puzzle, then shifted its weight as if testing its restored wing.
              </p>
              
              <p>
                "I chose to help," I said simply, though my throat felt raw as if I'd been shouting for hours, and exhaustion pulled at the edges of my consciousness.
              </p>
              
              <p>
                The rook shifted in my palms, testing its weight against my fingers. Then it launched itself skyward with three strong wingbeats, rising in a spiral that carried it high above the mill's roof. It circled once over my head—close enough that wind from its wings brushed my hair—then vanished into the forest canopy with a harsh cry that sounded almost like laughter.
              </p>
              
              <p>
                Bran approached like I might explode if he moved too quickly. His boots slapped against wet stones, the only sound in the unnatural quiet that still blanketed the mill.
              </p>
              
              <p>
                "That's not nothing, Rowan Ashbourne," he said, stopping just out of arm's reach. "That's—" He glanced around the empty yard as if expecting eavesdroppers to emerge from behind grain sacks. "That's the kind of something that gets noticed."
              </p>
              
              <p>
                My spine turned to ice. Not from the cold water soaking through my boots, but from something else entirely. In Hollowmere, being noticed was rarely good. We were simple folk who ground grain and tended sheep and asked no questions of the forest or the strange lights that sometimes danced between trees after midnight. We kept our heads down, our voices low, and our curiosity locked away where it couldn't lead us into trouble.
              </p>
              
              <p>
                The last person to be noticed had been Marta Greenhill, who claimed she could taste tomorrow's weather on the wind. The village elders had politely suggested she might be happier in the capital, where such oddities were more welcome. She'd left on the next merchant's wagon and never returned.
              </p>
              
              <p>
                "Just a bird," I muttered, but even as I spoke, a distant sound reached my ears—the deep groaning of metal under strain, like the millwheel when it caught on something heavy and wouldn't turn.
              </p>
              
              <p>
                Bran heard it too. His freckled face went even paler. "Storm coming."
              </p>
              
              <p>
                But the sky stretched clear and blue from horizon to horizon, painted with the soft colors of early morning. Not a cloud in sight, not even a hint of wind to stir the oak leaves. The iron groaning faded as suddenly as it had come, leaving only ordinary village sounds resuming around us—the millwheel creaking back into motion, chickens squawking in nearby yards, someone calling for breakfast from an upstairs window.
              </p>
              
              <p>
                I waded back to shore, boots heavy with water and mud. Bran watched me with the expression he usually saved for lightning that struck the same tree three times in one storm—fascination mixed with the certain knowledge that he was witnessing something that made no sense at all.
              </p>
              
              <p>
                When I knelt by the millrace edge to wash mud from my hands, something white caught my eye against the dark stones. A scrap of parchment had wedged itself between two rocks, half dissolved by water but still holding together in places. The sight of it made my pulse quicken with a mixture of excitement and unease.
              </p>
              
              <p>
                I fished it out carefully, trying not to tear the fragile paper further. Most of the writing had bled away into pale smudges, but I could make out part of a symbol drawn in what looked like dark ink. Lines that crossed and curved in a pattern that made my fingers tingle where they touched the wet parchment—the same tingling I'd felt when magic flowed through me to heal the rook.
              </p>
              
              <p>
                It looked like a rune, though not the simple protection charms that decorated our festival lanterns. This was something older and more purposeful. A rune for binding, though how I knew that, I couldn't say. The symbol felt familiar despite my certainty that I'd never seen anything like it before, as if it was something I'd always known but never remembered.
              </p>
              
              <p>
                Bran peered over my shoulder, close enough that I could smell grain dust in his hair.
              </p>
              
              <p>
                "Where do you think it came from?"
              </p>
              
              <p>
                I turned the scrap over, but the back showed only a water stain that might have been a partial letter. Or a claw mark. Or nothing at all.
              </p>
            </div>
          </div>

          {/* End of Sample */}
          <div className="text-center mt-12 pt-8 border-t border-blue-400/20">
            <div className="inline-flex items-center gap-2 bg-blue-800/40 border border-blue-400/30 rounded-full px-6 py-3 mb-6">
              <Star className="text-blue-300" size={16} />
              <span className="text-blue-200 font-medium">End of Sample</span>
              <Star className="text-blue-300" size={16} />
            </div>
            
            <p className="text-blue-100/80 mb-6 text-lg">
              Want to discover what happens next? Get the full book for just <span className="text-yellow-300 font-bold">$0.99</span>!
            </p>
            
            <a
              href="https://a.co/d/85bMEWr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg shadow-lg"
            >
              <BookOpen size={20} />
              Buy Now for $0.99
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}