<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Produit
 *
 * @ORM\Table(name="Produit")
 * @ORM\Entity
 */
class Produit
{
    /**
     * @var int
     *
     * @ORM\Column(name="idProduit", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idproduit;

    /**
     * @var string|null
     *
     * @ORM\Column(name="nomProduit", type="string", length=100, nullable=true)
     */
    private $nomproduit;

    /**
     * @var int|null
     *
     * @ORM\Column(name="prixProduit", type="integer", nullable=true)
     */
    private $prixproduit;


    /**
     * Get idproduit.
     *
     * @return int
     */
    public function getIdproduit()
    {
        return $this->idproduit;
    }

    /**
     * Set nomproduit.
     *
     * @param string|null $nomproduit
     *
     * @return Produit
     */
    public function setNomproduit($nomproduit = null)
    {
        $this->nomproduit = $nomproduit;

        return $this;
    }

    /**
     * Get nomproduit.
     *
     * @return string|null
     */
    public function getNomproduit()
    {
        return $this->nomproduit;
    }

    /**
     * Set prixproduit.
     *
     * @param int|null $prixproduit
     *
     * @return Produit
     */
    public function setPrixproduit($prixproduit = null)
    {
        $this->prixproduit = $prixproduit;

        return $this;
    }

    /**
     * Get prixproduit.
     *
     * @return int|null
     */
    public function getPrixproduit()
    {
        return $this->prixproduit;
    }
}
