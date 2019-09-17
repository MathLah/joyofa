<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController {

    /**
     * @Route("/", name="index")
     */
    public function index() {
        return $this->render('default/index.html.twig');
    }

    /**
     * @Route("/qui-suis-je", name="quisuisje")
     */
    public function quisuisje() {
        return $this->render('default/quisuisje.html.twig');
    }

    /**
     * @Route("/la-seance", name="seance")
     */
    public function seance() {
        return $this->render('default/seance.html.twig');
    }

    /**
     * @Route("/le-tarif", name="tarif")
     */
    public function tarif() {
        return $this->render('default/tarif.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact() {
        return $this->render('default/contact.html.twig');
    }

    /**
     * @Route("/infos-pratiques", name="infospratiques")
     */
    public function infospratiques() {
        return $this->render('default/infospratiques.html.twig');
    }
}