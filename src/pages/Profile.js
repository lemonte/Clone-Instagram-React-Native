import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = width / numberGrid;

const posts = [{
    id: 1,
    first_name: "George",
    last_name: "Bluth",
    avatar: 'data:image/jpeg;base64,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'
},
{
    id: 2,
    first_name: "Janet",
    last_name: "Weaver",
    avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEA8QDxAPDQ0PDw8NDQ0NDw8NDw0NFREWFhURFRUYHSggGBolGxUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGBAQGi0gHyUtLS0tLS0tLS0rLS0tKy0tLS0tKystLS0rLS0tLS0tLS0rLS0tLS0tKystLSstLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAYFB//EADkQAAICAQIEAwcBBgUFAAAAAAECAAMRBCEFEjFBBlFhEyIyQnGBkaEzUmKxwfAUFiNy0RVDU2Oi/8QAGwEAAgMBAQEAAAAAAAAAAAAAAQIAAwUEBgf/xAA0EQACAgEDAwIDBgcAAwEAAAAAAQIRAwQSIQUxQRNRImFxFIGRodHwBhUyQrHB4TNi8SP/2gAMAwEAAhEDEQA/AOXPoJ4MUhBQkFIQUhBSEHkAKQg8hBSAHxIQWJCD4gILEgB5CCkILEhBYkILEhBsSEFiQgsSEFiQg2IQikILEhAqqWc8qgsT2EWU1FWx4RcnSR1U8N3EZ2HpvOV67GnR2LQZGrK//RbucJyHc/F2Ef7Xj23ZX9jy7qo1PD/CKco5hzN5mZWbqMr4NXF06CXKssP4NrPRcStdSn7lj6dj9iMeC689D+TD/M5g/luP2Lmn8K1L8gz54lM9dOXkuho8ceyDv8PV4+AfgRVq5X3Genh7HHt8MV5PuzpWtnXc5nosbfYxU3zzwpCChCKQAsSEHEhAhWfKDcicg4hAPiQg4EAA0QkgDck4EDdK2FJt0ja8C8NLyhnHMx3Mw9Vr3dRN/S6GMY2+Wdi7w3WR8I/E5I66a8nZLSQfdFFvCNfXl3l66lP3KH07F7HL4j4VA3TIPl1E6cPUW/6jlzdNj/bwc7S+GbmOG90eY3zOmevxxXBy4+m5G/iLtnhFvlY59ekpXUl5RfLpXsy5pvBwx72WP4lM+pu+C6HS4Jc8lbWeESvwsR6HeWY+pX3RVk6Wv7WcDW8NsqOGGR5iaGPPHJ2M7NpZ4+/JUZSOoI+u0uTs52mu42JACxISwq6yxCqMk9BBKSStjRi5OkajhPhQsA1m/wDCOgmXqOoqPETY0/Tb5mdO3wdWe2PocTlj1Oa8nU+m434L/B/DSU7gb9ydzOfUa6WQvwaOGLsjvDRqB0nB6rs7NiATQLnOBGeZg9NFtKgJS5WWJUPywWEE4h5AQ2NHSFbIHeWpCNlciOKePT2B48UhB4SCAkAGFzBZFyGtJyNorkqG2u6O3p9KOWcM8js1IYltOTrquVtp14pWjOzw2z4K8tKR8QALfCse2rz+9Ks//jZfpX/+sT1nhSjlH0nkc75PXYuxfxOctEVhslET6cHtGU2hXGx69MB2keRsKgh2pECkyNDqAIHZCK5AZZFtCyRz7eGK2cgGdEc8o9ip4kzM+JeFKKyQACNwZpaLUNyoztbp4uDMXNw86PywWGmaLwfoOdy5Gw2EzeoZtsaRq9Mw23NnpeloCgbTzM5ts9JCNIlKiJYwMYA2ZCBrFCgoAkVhjpCtkDvLEhGyu7SxIVkTGMhQMxgHkE9eePFCQeQgpCElbYMVqyJ07LNdwzKnFl8cqs6tGoHLOWcHZ3wyLac/XpzHMvxOlRxamO52irTSWYKOp2l0pKKtnNCDnLajW8P8LKVBb3iZj5eoSTpG5h6dCueRDwtixWXIAOcQ/wAwuDTIunRjNSibnh+n5VA9Jg5Z7mbOONIuYlRaNIAfEgRCQgzCRAZERHTFBKwpgoDOIwDkca0ntVInXpsmx2c+bHvVGLTgnLaAd1zsJtPV3AxloVHJ8jU6fgKMoyo/Ey56ySfc1Y6WLXY6/C+FLV0GJx59Q8nc6MWFQ7HWAnGdIjCQhsjoRgrCwIlBiDj5gIAwjIDIbFjxYrRUeXIrZE0dCkeYwDySetPIChIPiQgsQAHkIOIAEqWkd4rimNHJKPYm9vnrK9lFvrJrkfQ28tqn1xJljcGgaee3Kmeq8JGUB9J5TPxJnrcXYvioZnPuZdROsrY6CMgRpADEwkGzIAbMJATCAWJCAMsZMDBNWZN1Ao5uq0I5gcTqhmdUUzx8nS0iYAnLkfJdBcFoCVFiGYyIjALxqFsiZo6QrYg0jRLHLwUGxvaQ7QWCbYdpLIrLIyiK2QNLEKRMI6ADyw2A8jE9ceOHkIKQg+JACxAQfEgAgIGydyU0sN+U4ib0O8U0roucEpDXKCM+QlOplWNnToYJ5eT1bh1eFH0nk80rkesxrguESksCUQMKHMgRjIAEwgGhIKAgJjAGzJRBSACAgCR2LGixWg6oshkSiKMC8KAyBjLEIRmMAEmEAJaGgDEw0QbmkogJMIADGIBCAUhDyAT2B40eQg8gB8QAHEBA66yxwoJPpA5JdwxhKTpI13APD2cM439e0x9VrfETe0ehUUnJcmjbgakfCPxM5auV9zRenjXY5dXBBVaGUYnTLVucKZzx00YTtI2GlX3RMfI+TTh2J8RBxxAQYwkBhAMZCCkACxhQAYSDYhAEIoR5CAtCiMBDvGYqLCyssQzSIjIXEdMRkZjigNCgAGMAYCQgmWRMlAGMAAwgBhINCA8hE9eePHkAEIADwADRckDzOIG6QYq2kb3w/wANTlGAJgavPKz0+lwRjFJI1mn04UTInNs0oxosYlY5E1IJjqTQjiToMStliDgCCTCAaQgxhAKQhU1nEKqf2jqrFSwUkBmA8pz59Viw/wBckmXYdNlzf0RbMz/nA8n7PN2T3xWFzt6k42mMuty9P+n4vy/U2/5Enk/q+H8/0OtwXj9eoIXBrtwTyHcHHXlPeaWj6lj1D21Uvb9DN1vTcmmW7vH3/U7GJoGcNIQYmEAxMJBIJGREhaLQ1g88NAsFjCkAiYx0KyJjGQoMJCasRGMhOJEyMhNcexaANcNgob2cNkoHkhslHjwnsTxg4kAEIABCBkJFisaPc9C8KMSi5/M87rktx6nRt7FZqlMymjQsctBRLEhkZESiKOPmAg0JBYkICYQAM2Ouw6n6SOkrYO55pxTW+3vss3wzEID2QDC/oM/eeI1eb1s0p+/b6HudJp/QwRh5Xf6vuUWG/wBcj9JSdXgmpsKMrqeVlIZSOzQRyShJSjw0JOEckXGStPg9G0OvWylbiQqlOZsnZSPi/BBnuMGojlwrL2VW/l7nhs+CWLM8Xd3S+fsZ3ifilmPLQORQf2jAFmHoD0H97Tz2s61OVxwcL38v7vBu6Xo0Yrdm5ft4/wCh0eI2e5MjkpOE5dviIwWJ8gT+kbH1mc9TC+I8Kvm+Lb9kV5OkRhglXMu9/Twl9DT5nqTzgQMDCImREZGxjIUAtDQLBJjEGCyWCiVUitjJB8sWwg4hIPiAIJEawAkQ2AHlksh4sJ7Y8SSU1FiAO8WUlFWxoQc3SO3XwX3ehz5zheq5NFaFbTlarTlGwftOqE1JWZ+bE8cqElZhbRIwkek+GE/01+gnmta/iZ6rSr4UaLEzbOwhcx0KwqmgkgonzEHGzIQIQEKnE9ctKZaxKmbIrNgZlLAZ3A3nPqM8cUfikk/FnRgwSyyqMW/ejA6/xHe9ntEsanIA5UYlOYd+U7bzzWTqGaWTfF18k+PzPUYem4YY9k4qXza5/FBXeK7mpeu0K/MpTnUcjjPfbY/pLX1LNkxyxzp2qvs/0Ej0jDDLHJC1Tuu6OQrgjmG42My6adM1u4R/qIEQPz9Ij7oUL/rTmoaZTivnLu3crseX6ZyfvO5Z8kdO8N8Xf/Pp5Ob7Hjef16+Kq/79fAwP6zgrk6CTErvyKbbgmtQ111m1XuCe8M7/AEyepAxPa9O1mN4oY5TTlX7/AAPH6/S5FlnkUGo2dXE1bM0WZCANCgAYjADVIrYUiUJFsah8QWGgTCAbENkFiQgJhAATCQHMIDybhfDzafSetz5vTR5PTab1Xb7Gw4d4fVcHG8x82tbNvDo4w7I7g0AC4xOH1m2dnpqjgcU4MGPSaGDVbUcObSqZBpOCbjIj5NVwLj0qTNdwzT8gAmRmnuZpY40jpicpeR2LGTA0KtZGyJEpijEfNDQthhoKGTMd48cmylflCMw9WLYP8h+Z53rTe+C8Uz0XRIx2Tfm0ZIiYpvp+4JGRhvoG7j0MKD2Kteaz5qdmHn6/WWySkixRsvLuPtiUPhivhjaizCH+LA/5ghH4hUrZX0lfTzJyfpLMjHfCL6bnPYdPWUPhUVPgllQhE/8AYjqh0afw7xixmp05C8mGXmwSxAUnrn0m/wBL6jllkhp+K5588Jv3PP8AU9BjjCedN3x9O6RpmnqUebEBIwDhYLDRIoisZIOKEYwkAMIBCQgjIQiYx0KRM0dIFkfNGoWzA+FG8/Ob+vRh9OfBv9MRgTAndm5ElZoiQxEawY+5oWg66BFc2FRLCjErfI6JQ0Sg2MTIQcGQNgu8ZIVsjzDQAg0FBMb4v4tRbiteY21OQH5fcIIwy5z5gfieb6pnw5lti/ii/u+Z6bpGlzYnvl/TJff8v38zNc35mJTN4LY+h8j3kYVa7kD17kf/ACfL0jqXA0Z06IrNQK0Yt0GDnyBIGftmN6e+SSBnmoR3vsRcT1XKlSj47HFSD1J3P2GT9ocGPc5N9lyynJl9NJLu2kv1+5cl+rHwjqeuOwnO3zZbKXJIzn4U/I7QKKXxSIku8iVVx6n9BKm7Ebsf+cD5ITaTJdACVJZVDLsRk4yI+CLeWMYum2lftfBTnqOOTauk2b9X6D7b7z6Qo0qPAuVuyZDAwokEQYIQBETIQaQAJhIAzxkhbBNkO0lkTvHSFbIGaWJC2DCQxXD6vZETayy3oycMFj4NTpNXtMvJj5NGMy2l2ZS40WKRarlTHROsRjD5gCODIQIRQjyEAIhsFAmMAQMjIYbxnp0FoC+0NjAvYztlSD0C/gzyXVYwx5+Lt8u+33HrujTnPD8VUuFX52ZgkrsfsZwJpmxQa2H/AIhpA5DewYyxAx0YkKR+djF9N38IsttW3RT16rZTdhlsX2VgJUgn4TsZZibx5I2q5RTmmpYJxtNNP/Bx9JqBddowW/ZVFzv85BXf12X8zsnD08eVpd3/ANMrFqVmzYE3/TG/v7fodMcS5mNWlX2jfPcxxUg8ye/9ZyrTqEd+Z18vJ3fbFKbhgW5+X/avv8nb0iEIBzc5+Z8AZP2mflknK6r5HWrSW52ycLKrJYislksv8F0he1W+SshmPqOgmv0fRy1GojL+2Ltv6dl+/BmdV1ccOBx8y4X+3+/Jqw895R40mreI0FMsq8qaLEwuaCiWEIAjMYUQiZ4yQtlex5YkK2R88ehbBZpEiAZjUAlAihMrZTvNWMzPcSSqwiLJJjRbOlpbTOacUXwZ1qLMzjlEviy0plTLAhAQICAIUARSEGMhASIwoMJDkeKeHi6hmCc1te6EfFy5HMPXbtMrqul9XC5RVyXb/Zq9J1fo51GTqL7/AOjz0L6/bqJ5S0e0SQ5Q9gM+ZgTXkjb8Mp6/SKRlqKrmPTn5FA+pO/6GdGHLJcKbS+84dRp1k/sUn93+TM8VqZGH+nVRzKQyUO2XTPzDymnhaku7l82jD6hinhXaMG/EX3XzRWoAKk4IPTqdjGbldGPGMkzuaG+6tFFVFbVYzlXUu38RJ2JnNkjjm/ilT+h6bTyniilHGnH5S5/PhnVo1blclWXzV8qR+CQZxTxxT72bGKcZK6cfr+3+R0dHrFJAcMq9zWA5x9MiULBFzW6VLz7gy45bW4U383X50zTcOs0bYCMrP0xdkMT/ALW2/E9NodL0vjbUn/7fo+PwR5fXfzSNuSaX/r2/FWzsAADAAA8gMCeihCMVUVS+R5+c5SdydsWY4oaNFaCidbIjQ1kyPK2hkybmiUNZE7x0gNkLtHSEIHMdIDI8xxRyYAggwgJ1MrGMzfqRmakcbOGU0Kq0QSiwqSOlpiD0nPO0XRo6dKzlky5IuJKWWoOAgQMFBFmCiD5kIMTIQaEg0gBSEOfreCae0lnrAY7lkJQn1OOs4c/T9Ple6UefdcHdg6lqcK2wlx7Pn/Ji+JvUSU09QSsHHt3ZndvVRnAH97TzGpyaVNxwx+9t8/Tmj1WljqKUs8+fZJJL68FFNOBucn69TOJ5G+Edu7wirq6UqW+3lBcoWYncnC7L6DptLcc5TcYXx++fqc04wxxnkrmnb+7t9Dk6PhqClAygk/FkdczsnnlvdMp0+jxrTw3RTb5f3knB9O1QsqYkqlpFTH9xgGH8z94uompuM15XP17FujwbISxS5SfH0dM6a0N23WcjnFnRTi6TLtNAXvn67TmlkbI5EqcO9scKvMwGSVOCB9ZfpcWfNLZijb/fuU5dXDTx3TlSO9oeEPUy8uptNYOTUwDAjyyen2E9rpunZMLi1ldeV++34HldX1THqIyUsMd3iXn69v8AZ1prGMODIEMNFoJLW8VoKZOGldDWCYQAMIyAQOI6FYKiFkQ7LAmEELDYKJgIthPMtVrPWemhiPNZdR7EScQfIxHeGJUtVOzS8G1J2zMzUwXg2dPNtcmo0twOJlzid8ZHQRpztFqDzAEbMhBxAQLEARESEBMYABaGgWINJRLB1VZet1U8rMjKrH5SRjMozwlPHKMXTaaLsE4wyRlJWk0zPaTwqcn2r7A+6KxnI89+k87h6DJt+rKvp5/Hsb2bripenH8S3X4Wq97maw5PuYIBVcd9tznM6YdCxK90n8u3b58cs55dazcbUvn+7M9428PpRp+auxz7SyurkflYsSck5GOynbEqz9Nx6eskZN14df6of+aZNRB4pRVvyvr95nSvukDtgiZF2z1U41Gl+6JuXI+28rugrsa3w9bXqq2rvRXuqA9/GHes9GJG+R0P2notCsGtxuOaKcl57N/O0eW6nHNosqnhk1GXjwn7V+aJb/DaZyljIP3SA/4O0GX+HscpXCbS9qv9CrH17IlU4Jv5Ov1Lei0C0ghckndmbcmbGh0GLSRahy33bMvWa3JqpJz4S7JFkpO+zjojbbc7DzMWeSOOO6TpDQxyyPbFWyJNSjEqrqWHUA7zlxdR0+SbhGSs6snT9RCCm48Ed2vrRuVnAby64+s583WdNiybGy/F0nPkhvSos6W5X3Rgw9J14NXizxuDs5c+ky4HU0dKpY0mVJBssVMNFeyWIVkFhliFZDz4j1YovawbSWSoYrQyJgZWMeOT2Z4ks6Knmb6SvJKkX4Me6Rq+GafYTJzTNzDCkd2hCJwSaZ1xRerslDiWplpHzKmh0yVREsYkAisYUhBiZEgANGAQvLEKwUkZEW0EqbHSC5YtjUMYQGN8XF9VeunpHP8A4attRaB/5CAFX64JOP4pldQjPLcIK6Vs7tBKEM0JZHStfv8AEy1deSR3x06Ty8pbe57jfwP7IgjO3bzg9RNcEc0+x2vC1ZXVA529m4PqNtvzj8TV6HO9Tx7P/Rjdbaelb+aNkxnsEeNAxGAFiAJwvFLkVqAcczb+oAnnv4gyNRhC+7PQ9AxpylJozKNjcHB855aqfB6drwCz5yf1hoKjXBY4TqWrsVxnGfeHms6NPqHp8qnEp1eGOXG4M3+i1iPsrAkDJHcT2eHV4s6+B8nic2kyYeZLgtmXo5itaJbERlOyXIRkDR0KARCAlraK0MicPK6GPLho9p6r1eTyv2fjkPRHlaLkW5DYPglRqOHakbTLzY2bOKaZ3abgROGUWdakS88Sg2FVqcQSgFSLqXShxLFIlWyK4jWOXgolkbPHSA2MLZNpLG5sw1QA0WK2FIsLKmOgiYBjlcf4qulpaw+859ypO72noP6/aLkmscXJilLw7oDRWWtPNqb29rex68x35ftn+cOmwuEbl3fLBKVkms4TTaxdl5XIwWQ8pb1PmZzarpOn1D3SVP5cHZp+pZ8EdsXa9mVB4frG/MxOQRnBGPIjvOKP8O4V/c+9+O3s0db65lfG1VX7Zco0VVbM6IFZtiR2HkPKa2n6fgwTc8cab/fHsZubW580FCcrS/fPuWOadtHKEIAhGAhnvFdZxW3yglT6Ezy/8QY5boT8dj03Qckdso+TMnvPP+T0gFRyAB94X3sMuHZZGoVMBBz2dvJYEvLKHCU+/CO34UsY3knclDzHy3GJp9GlJ6rjtRmdXjFael7mwJnrzyRBaZZEVlO2XIrZXZo4oBaEAaNFYUSc0UazB2WDE9AouzDlJUU6Vy0uk6RyY1crO5phgThnyaceC5VrcHGZTLFZbHKdKnUZE5pQovjKx8nMnFB8l/TucTnmi2LLAeV0PY5tg2hsFrYyiBsge6OoiORLRbmJKI0WXUeUtFlkytEaHTE7gDJOANyT2ECRLMfoX/x+qbUtvpNMTXpVPSyzvZ/fpKoR9XJu8Lt9fcVs0LNO5IRkfNDQBi0NEBLQ0CxAyUSyatojQURW6+pSVNihh1XO/wCJx5NbhxtqUuUd+Pp+fJFSUeH5MvxnjZs5q1HLXnqfiPr6Ty2v6jPU/DVRPUdP6ZDT1LuzLX8UC5DbAZw/YnynFHTuVNHfkzwxvnj5kGh4gtgCowGBl2/oJZkwuHLRXg1UMtKD+p06MD4csT3nNJX3OuSfk1/hG+v3lwRadyT3E3Oh5MSk4L+o831vHkcVK/hRpSZ6STUVbPNpN8IojXVs7Vq6mxPiXO4gwZoZb2OwTi4umBbOtFTKlh39THQpGTGAErQEJA0UNnl5sPnPV7UeQbb8lnRWe8BK8seC7TyqVGp0dHMBMrJPazbhC0Xa+FjOZS9Qy1YUdCrS4E55ZLLlCiT2MXcHaTVYErlbHQ1l4hUGByIzfG2A3EVmpA7x1jYrmU7daPOXRxMqeQfTa7frBPEGOQ69OozOSUKOiMiwLpVtH3Gb8WcTdzXoaDi7U7WMP+3p/mP33/WUZr4xx7v8kHcdbR0rTUlVYwlahR6+p9TOmGJQSSFciQvHoWwS8NEsHnhoAuaGiDgwEJFaK0NZwuMs1d3PTp/aWFcM5GRmeY6hGUdRuhC/met6W4ZNOoZclL2MvxJ3dma0crd1A5Ji5JSc/iXJ6HFGEYVj5RkOLaWx1LheSoHpnJb1mhgnjTUbtmB1DDmnFuqRNwTR8pHMN+q56GV6nJa4J0/T7JfEuTXafJExp8M3ZfM73hYH2xPZVOfvNXouNy1NrwjH6xKMdPz5NBxwuabFrJDlTysOxnrNRh9XG43R5CM9rtHjC6y/SXJYxYagtyslmcsvnvMTT5p4crVEb3I9i09hatGIwWVSR64np0yoocWPKntB1qPtdu6j4h+MxxJe4YcMAQcggEEdwY4AgZCBgxRjy+esPIBo2DmBqyJ07RqOEcTGBmZeowOza02oTR3E4kvnOF4GdyyokHERF9Bh9UL/ABwPeD0g+oBbq8CGOPkDnwcTUcWw2CZ3Q09xOKepSlTI7eNADrGWltiS1kYop28byO8ujpTnlrl4KZ4m0u+zo53q5FzQa7J6ynLi4OnT6jcajQanIEy8sKZq452i1q9ataPY5wiKWY+gE5mlFNsvsz/hStrGt11v7TUHFQPyUA7Afj9JzaaDneV+e30DJ+DSc866FsYvJQbGLyUCxueSiWEGgDYXNIQQeSgkqtEaQybMj4sIsuVR0QYc+ZPaeM6tqITzVBdj3XRcU8WnuT7nKuqVgExttkTHi2nuNSk18RPVo1bC7Lkgc37vrFU3vVspyOotpHe/y7y4HtOu/TYibmPoc80N0ZGLk67CMqlE6/CtCtION2b4mM2un9LjpE3dtmLr+pS1VJKkdMbzRM45+t4Pp7TzWVJY2CoLDJAPlF9OMnbRChVYdOwpsJNTbUWnt/62Pn5GXoq7cFm9AwKncMCD9CIxGcfwz+wFZOTQ9lB+iMQP0xKtM/gp+LX4MWPY6dzhFZ22VQSZc3QXxyTIuQMjBxuPKCw0eWz1p5AeQgaWEdDiBxTIm12LVWvYSqWFMvjqZLuWa+J+eZU9OXx1a8k44qNt5X9nZZ9siWW4iCOsrWBplz1CaODq7eZifxO/HGkZOWe+TZDmPRWLMhBSEDqsIORBKNoaMnF2jVcK1GQJk54cm7p52il4k1J1FtWhrPxkW6kj5agen3/4mLqryTWCPnl/Q0IcLcaSjCqFUYVQFUDsBOxRSVISwmujbQbghbBtGsXPBRLEGgohIGgoIXNBQRZkIGrxZRtUNF07OBreCM1vOr+6SSwPrPOZ+gb5XCXc9Np/4g2w2zj2C13ClVAa93HxebCcfU+kejjUsSuu509O6x683DJx7FXR6JmPvZVe5PX7TL0nTMuqkklS9zv1mvxaeFt8mp0tgsQJ0dPhJ7ie0x4PsiSXK8nisub7RJvsyxUuOs6m0+UUJE3NFoYBmhohU11C2qUcZB/IPYj1jIV88EGmrZUAc85Hu8/7w7Z9YIztuL7g28WZfwrrcX6ql/ia2y1fXDYP9Jw6LPebLjfdOxEd7iJ5jTX2awO/+xPe/nyzum+Ugv2Lvt18x+RGGPLZ648ePIQUhBQkFAAeQgQcwUiWwTCAUgRSEFIQQgAd2rUiil7W3CLnA7nsJka3KscXJ+Dd0cG0kSeD9G3I+qt3u1R589eWvsomRpIOnll3lz93hGjN+F2RogJ2lZHYsZMDQIbElWAJbYHEO4kDxaGsNWi0Gww0WhrH5pKILngoljM8NEshd4dqfcG5rsQsxMMYKPZAlNy7sn0uxzFyJNUwx7nbqbmH8QH5mfXpOvB1L4vqAZeIRWtsfOGgHA4nxe9BzVUo6jKuxswVYdfd7j7zn1OXLjjeOG776EbOXR4wcZFtQKnvW2CPsesxX1j41vhTXswqTMvZe6akXoeUe29orHf3C2DkfQzmw6qK1e+D7v8AyBx4s3Go1ANpZj7lVILHB7nJ2+wnoHOM80nLtBf5/wDgXwjkP4oXJ5aOZexLKCR9MThl1zEnSg6Akz//2Q=='
},
{
    id: 3,
    first_name: "Emma",
    last_name: "Wong",
    avatar: 'https://img.freepik.com/fotos-gratis/muitos-baloes-coloridos-no-ceu-azul-conceito-de-amor-no-verao-e-namorados-lua-de-mel-de-casamento-imagens-de-estilo-de-efeito-vintage_1253-1119.jpg?size=338&ext=jpg'
},
{
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar: 'https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg'
},
{
    id: 5,
    first_name: "Charles",
    last_name: "Morris",
    avatar: 'https://timeline.canaltech.com.br/100805.1400/como-salvar-imagens-mais-leves-e-compactas-para-web-no-photoshop.jpg'
},
{
    id: 6,
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4'
}
]


const List = ['Joao', 'Cleiton', 'Geanderson', 'Caio', 'Walter', 'Andressa', 'Carol', 'Amanda', 'Gustavo']
export default function Profile({ navigation }) {
    const [layout, setLayout] = useState('grade')
    return (

        <View style={{ backgroundColor: "white", flex: 1 }} >
            <View style={{ height: 40, flexDirection: "row", marginRight: 20, marginLeft: 10, marginTop: 40, justifyContent: 'space-between' }}>
                <Text style={{ color: 'black', fontWeight: "700", fontSize: 20 }}> geanderson.gl</Text>
                <Feather name="align-justify" size={30} color="black" />
            </View>
            <ScrollView>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Image style={{ marginRight: 20, marginLeft: 10, width: 100, height: 100, borderRadius: 50, borderColor: 'pink', borderWidth: 4 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4' }} />
                    <View style={{ marginLeft: 30, marginTop: 20, flex: .8, flexDirection: "row", justifyContent: "space-between" }}>
                        <View >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                25
                        </Text>
                            <Text>
                            publicat
                        </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                624
                        </Text>
                            <Text>
                            Followers
                        </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }} >
                                1.217
                        </Text>
                            <Text>
                            Following
                        </Text>
                        </View>
                    </View>
                </View>

                <View style={{ marginRight: 10, marginTop: 10, marginLeft: 10, flex: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Geanders Lemonte </Text>
                    <Text style={{ fontSize: 16, }} >"Never give up on your dreams no matter how hard it is"</Text>
                    <Text style={{ fontSize: 16 }}>Developer</Text>
                    <Text style={{ fontSize: 16 }}>Frontend Developer</Text>
                    <View style={{ borderWidth: .8, borderColor: 'grey', marginTop: 20 }}>
                        <TouchableOpacity style={{ height: 30 }} >
                            <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "bold", marginTop: 2 }}>Edit profile</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        style={{ marginTop: 20 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={List}
                        renderItem={({ item }) => StorieCard(item)}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ borderTopColor: 'grey', borderTopWidth: .5, flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                    <TouchableOpacity style={{ marginTop: 10 }} >
                        <MaterialIcons name="grid-on" size={30} color="black" />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 10 }}>
                        <MaterialIcons name="person-pin" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <View>
                    {layout == 'grade' ? <View style={{ position: 'relative', width: '50%', marginTop: 10, left: 0, height: 0.8, backgroundColor: "black" }} /> :
                        <View style={{ position: 'relative', width: '50%', marginTop: 10, left: "50%", height: 0.8, backgroundColor: "black" }} />
                    }
                </View>
                <FlatList
                    keyExtractor={(_, index) => index}
                    numColumns={numberGrid} data={posts}
                    renderItem={renderItem} />


            </ScrollView>



        </View>
    )
}


function renderItem({ item }) {
    return (<View>
        <Image source={{ uri: item.avatar }} style={styles.itemImage} />
    </View>)
}

function StorieCard(item) {
    return (
        <TouchableOpacity onPress={() => console.log(item)}>
            <View style={{ marginTop: 10, marginLeft: 13, marginBottom: 5 }}>
                <Image style={{ width: 70, height: 70, borderRadius: 40, borderColor: 'pink', borderWidth: 4 }} source={{ uri: 'https://avatars1.githubusercontent.com/u/48225849?s=460&u=3f8e9a830d52615b9b00e517f5f82bb8530d4a7b&v=4', }} />
                <Text style={{ textAlign: 'center', marginTop: 2 }} >{item}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemImage: {
        width: itemWidth,
        height: itemWidth
    }
});