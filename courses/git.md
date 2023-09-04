<!-- repo/repository - folder
local repo- folder in our system
remote repo - folder in the github -->

<!-- initial setup -->
git init
<!-- link local file to github -->
git remote add origin "url"
<!-- to check if linked with remote repository -->
git remote -v

<!-- Frequently used codes -->

<!-- to know the difference in files of local and remote repo -->
git status
<!-- to push the code the remote repo  -->
git add . <!-- . means all files -->
<!-- to put message -->
git commit -m "html-css"
<!--  to configure for first time or login user of github -->
git config -- global user.email "your github email id"
git config -- global user.name you "user name"

<!-- for final upload -->
git push
<!-- and copy the code in next step given in the terminal -->

<!-- u - new files/untracked files
    a- added
    m - modified -->

<!-- to clone repo in your local device -->
git clone "link of repo"

<!-- how to download the updated code of repo -->
git status 
<!-- this is to check status -->
git pull
<!--  this is to pull new updated code from github repo to local device -->

<!-- to open VS code from cmd  -->
code .
