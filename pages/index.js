import { Box, Text, Grid, Flex } from 'theme-ui'
import { useState } from 'react'

let options = {
  Cringe: {
    But: {
      Expected: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Free: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Funny: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      },
      Unoriginal: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      }
    },
    And: {
      Uncertain: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Bubbly: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Whimsical: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Unsolved: {
        Quests: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      }
    },
    Experiences: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      With: {
        Cookies: null,
        TikTokers: null,
        Cameras: null,
        Humans: null
      },
      Without: {
        Colour: null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    },
    Surprises: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      Yet: {
        Expected: null,
        Lame: null,
        Solved: null,
        Unoriginal: null
      },
      With: {
        Cookies: null,
        Dolphins: null,
        Cameras: null,
        Humans: null
      },
      Without: {
        Colour: null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    }
  },
  Deranged: {
    Quests: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Slay: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    },
    Adventures: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      Nobody: {
        Enjoys: null,
        Takes: null,
        Hates: null,
        Loves: null
      },
      Without: {
        "A Guide": null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    },
    Hacks: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      Nobody: {
        Enjoys: null,
        Takes: null,
        Hates: null,
        Loves: null
      },
      Without: {
        "A Guide": null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    },
    "Creations": {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Slay: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Purpose": null,
        Sleep: null,
        Cookies: null
      }
    },
  },
  Nostalgic: {
    Quests: {
      For: {
        "Girl Scouts": null,
        Dolphins: null,
        TikTokers: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Slays: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Cookies: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Inventions: {
      For: {
        "Girl Scouts": null,
        Dolphins: null,
        TikTokers: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Slays: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Creations: {
      For: {
        Monkeys: null,
        Dolphins: null,
        TikTokers: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Slays: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Cookies: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Projects: {
      For: {
        "Girl Scouts": null,
        Dolphins: null,
        TikTokers: null,
        Humans: null
      },
      That: {
        Run: null,
        Sleep: null,
        Eat: null,
        Slay: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Cookies: null,
        Sound: null,
        Sleep: null,
        TikTokers: null
      }
    }
  },
  Ancient: {
    Life: {
      On: {
        Earth: null,
        "A Mission": null,
        Uranus: null,
        Instagram: null
      },
      That: {
        "Faces Turbulence": null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      With: {
        Cookies: null,
        TikTok: null,
        Intelligence: null,
        "out Brains": null
      },
      Without: {
        "A Guide": null,
        "A Purpose": null,
        Cookies: null,
        TikTok: null
      }
    },
    Experiences: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      In: {
        NYC: null,
        Space: null,
        School: null,
        "The Ocean": null
      },
      Without: {
        Color: null,
        TikTok: null,
        Sleep: null,
        "Cookies": null
      }
    },
    Gadgets: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Slay: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        TikTokers: null,
        Sleep: null,
        Cookies: null
      }
    },
    Technology: {
      For: {
        "Girl Scouts": null,
        TikTokers: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Slay: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Cookies: null,
        "Sanity": null,
        TikTokers: null,
        "WiFi": null
      }
    },
  }
}

let ex = "Stupid Stuff Nobody Needs"

export default function Index() {
  const [stage, setStage] = useState(0)
  const [prompt, setPrompt] = useState(`Begin Horizon's Prompt:`)
  function processVote(word) {
    if (stage == 0) {
      setPrompt(word)
    }
    else {
      setPrompt(prompt + " " + word)
    }
    setStage(stage + 1)
  }
  function workDownTree(stage, tree, promptArray = null) {
    promptArray = promptArray || prompt.split(' ')
    if (stage == 1) {
      return tree[promptArray[0]]
    } else {
      let newTree = tree[promptArray[0]]
      promptArray.shift()
      stage--
      return workDownTree(stage, newTree, promptArray)
    }
  }
  return (
    <Flex p={3} sx={{ flexDirection: 'column', height: '100vh' }}>
      <Flex
        sx={{
          bg: stage!= 4 ? `rgba(0, 86, 64, ${stage * 0.25})` : "#005640",
          fontSize: stage != 4 ? '96px' : '144px',
          lineHeight: stage != 4 ? null : 1,
          borderRadius: 5,
          textAlign: 'center',
          fontWeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: stage == 4 ? 1 :0,
          p: 3,
          paddingBottom: stage != 4 ? null : "64px",
        }}
      >
        <Text sx={{opacity: stage != 0 ? null : 0.9}}>{prompt}</Text>
      </Flex>
      {stage != 4 &&
      <Grid columns={2} pt={3} sx={{ flexGrow: 1 }} rows={'1fr 1fr'}>
        {['#f7be00', '#7A4E15', '#dda15e', '#f9a620'].map((color, index) => {
          let word = Object.keys(
            stage == 0 ? options : workDownTree(stage, options)
          )[index]
          return (
            <Flex
              sx={{
                bg: color,
                fontSize: '72px',
                borderRadius: 5,
                textAlign: 'center',
                fontWeight: 800,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() =>
                processVote(word)
              }
            >
              {word}
            </Flex>
          )
        })}
      </Grid>}
    </Flex>
  )
}
