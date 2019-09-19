<?php
/**
 * Created by PhpStorm.
 * User: Mathieu
 * Date: 19/09/2019
 * Time: 22:28
 */

namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ParallaxController extends AbstractController {

    /**
     * @Route("/parallax", name="parallax")
     */
    public function index() {
        return $this->render('parallax/parallax.html.twig');
    }
}