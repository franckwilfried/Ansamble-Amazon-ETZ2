
/* Action du click droit pour aller du job 1 au 2 */

const afficheJobUn = '<section class="job_two"> <div class="intitule">Equipier(ère) polyvalent(e)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div> <i class="fa-solid fa-angle-right right_one"></i> </section> '
const afficheJobDeuxDroit = '<section class="job_two"> <div class="intitule">Cuisinier(ère)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div> <i class="fa-solid fa-angle-right right_two"></i> </section> ';
const afficheJobDeuxGauche = '<section class="job_two"> <i class="fa-solid fa-angle-left left_two"></i> <div class="intitule">Cuisinier(ère)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div> </section> ';
const afficheJobTroisGauche = '<section class="job_three"> <i class="fa-solid fa-angle-left left_three"></i><div class="intitule">Patissier(ère)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div>  </section> ';

let jobUn = document.querySelector(".intitule").innerText

if( jobUn == "Equipier(ère) polyvalent(e)" ) /* On est au job 1 */
{

    let boutonDroitUn = document.querySelector(".right_one");
    boutonDroitUn.addEventListener('click',function()
    {
        document.querySelector(".principal").innerHTML = afficheJobDeuxDroit ;

        let jobDeux = document.querySelector(".intitule").innerText
        
        if ( jobDeux == "Cuisinier(ère)" ) /* On est au job 2 */
        {
            let boutonDroitDeux = document.querySelector(".right_two");
            /* On est au job 2 */
            /********* Utilsation du bouton droit  */
                                
            boutonDroitDeux.addEventListener('click',function()
            {
                document.querySelector(".principal").innerHTML = afficheJobTroisGauche ;

                let jobTrois = document.querySelector(".intitule").innerText ;

                if (jobTrois == "Patissier(ère)" ) /* On est au job 3 */
                {
                    let boutonGaucheTrois = document.querySelector(".left_three");
                    /* On est au job 3 */
                    /*** Utilisatin du buton gauche */
                    boutonGaucheTrois.addEventListener('click', function()
                    {
                        document.querySelector(".principal").innerHTML = afficheJobDeuxGauche;
                        /************  On est au job 2 ***********/
                        /********** Utilisation du bouton gauche */
                        let boutonGaucheDeux = document.querySelector(".left_two");
                        boutonGaucheDeux.addEventListener('click',function()
                        {
                            document.querySelector(".principal").innerHTML = afficheJobUn ;
                            window.location.reload(true);
                        })
                    })
                }
            })
        }
    })
}