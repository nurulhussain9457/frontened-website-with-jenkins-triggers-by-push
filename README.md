command push
git branch -M main
git remote -v
Agar output me origin aa raha hai, to theek warna ye chala
git remote add origin https://github.com/nurulhussain9457/frontened-website-with-jenkins-triggers-by-push.git

kyu ki yaha readme enable kiya
Step 4: remote se README wala code pull karo
Ye bahut important hai, kyunki GitHub repo me README already hai.
git pull origin main --allow-unrelated-histories

git push -u origin main

full command
git branch -M main
git remote -v
git pull origin main --allow-unrelated-histories
git push -u origin main
