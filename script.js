    document.addEventListener("DOMContentLoaded", function() {
      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
          this.classList.add("card-hover");
        });

        card.addEventListener("mouseleave", function() {
          this.classList.remove("card-hover");
        });
      });
    });