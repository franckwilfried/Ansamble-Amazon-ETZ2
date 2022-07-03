
/* Action du click droit pour aller du job 1 au 2 */
let jobUn = document.querySelector(".intitule").innerText

if( jobUn == "Equipier(ère) polyvalent(e)" )
{

    let boutonDroitUn = document.querySelector(".right_one");
    const afficheJobDeux = '<section class="job_two"> <i class="fa-solid fa-angle-left left_two"></i><div class="intitule">Cuisinier(ère)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div> <i class="fa-solid fa-angle-right right_two"></i> </section> ';

    boutonDroitUn.addEventListener('click',function()
    {
        document.querySelector(".principal").innerHTML = afficheJobDeux ;

        let job = document.querySelector(".intitule").innerText
        alert(job)
        if ( job == "Cuisinier(ère)" )
        {

            let boutonGaucheDeux = document.querySelector(".left_two");
            const afficheJobUn = '<section class="job_one"> <i class="fa-solid fa-angle-left left_one"></i><div class="intitule">Equipier(ère) polyvalent(e)</div><div class="profil">Profil<ul> <li>Age entre 18 et 25 ans</li> <li>CAP cuisine</li> <li>Organiser et ponctuel</li> </ul> </div> <div class="mission"> Missions <ul>  <li>Netoyage</li> <li>Service caisse</li> <li>Entretient du matériel</li> </ul> </div> <i class="fa-solid fa-angle-right right_one"></i> </section> ';
                                
            boutonGaucheDeux.addEventListener('click',function()
            {
                document.querySelector(".principal").innerHTML = afficheJobUn ;
                window.location.reload(true);
            })
        }
    })
}