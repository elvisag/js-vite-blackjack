
git init
git add .
git commit -m "Colocar mensaje de commit"
git checkout -- . //Reconstruye el proyecto en el ultimo commit que se subio
git remote add origin https://github.com/elvisag/js-vite-blackjack.git //obtener este comando del nuevo repositorio que creemos en GitHub
git branch -M main //coloca el nombre de la rama principal a 'main'
git push -u origin main //sube el repositorio a github


PARA SUBIR CAMBIOS A LA RAMA:
git add .
git commit -m "Read Me Update "
git push
