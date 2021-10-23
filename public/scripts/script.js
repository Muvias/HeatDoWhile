const userForEachSocialMidiaLink = {
    github: 'Muvias',
    linkedin: 'in/vinicius-perazza-martins',
    instagram: 'perazzamrb',
    facebook: 'vinicius.perazza.1',
    twitter: 'Perazzamrb'
}

function changeSocialMidiaLinks() {
    for (let li of socialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${userForEachSocialMidiaLink[social]}`
    }
}

changeSocialMidiaLinks()