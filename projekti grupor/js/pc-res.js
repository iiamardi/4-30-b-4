  const gameLibrary = {
    fps: ["Call of Duty", "Valorant", "CS:GO", "Apex Legends", "Battlefield", "Overwatch", "Rainbow Six Siege", "Escape from Tarkov", "Halo Infinite", "Doom Eternal", "Far Cry 6", "Metro Exodus"],
    rpg: ["The Witcher 3", "Cyberpunk 2077", "Elden Ring", "Final Fantasy XV", "Dark Souls III", "Skyrim", "Persona 5", "Monster Hunter World", "Divinity: Original Sin II", "Dragon Age: Inquisition"],
    story: ["The Witcher 3", "Red Dead Redemption 2", "God of War", "The Last of Us Part II", "Horizon Zero Dawn", "Ghost of Tsushima", "Death Stranding", "Cyberpunk 2077", "Final Fantasy VII Remake", "Assassin's Creed Valhalla"],
    mmo: ["World of Warcraft", "Elder Scrolls Online", "Black Desert", "Final Fantasy XIV", "Guild Wars 2", "Star Wars: The Old Republic", "Albion Online", "New World", "Lost Ark", "Blade & Soul"],
    strategy: ["Age of Empires IV", "StarCraft II", "Civilization VI", "Total War: Warhammer II", "XCOM 2", "Crusader Kings III", "Anno 1800", "Warcraft III: Reforged", "Company of Heroes 2", "Command & Conquer Remastered"],
  };

  const pcRecommendations = {
    low: [
      { name: "Gaming PC Gjirafa50 Black Series 3", desc: "RTX 4060, AMD Ryzen 7 5700X3D, 16GB RAM, 512GB SSD -", img: "https://iqq6kf0xmf.gjirafa.net/images/1396a324-60ee-4e7a-8492-40e150be16cf/1396a324-60ee-4e7a-8492-40e150be16cf.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-amd-ryzen-7-5700x3d-16gb-ram-512gb-ssd-gaming-pc-gjirafa50-black-series-3-2" },
      { name: "PC Gjirafa50 Black Series 4", desc: "RTX 4060, AMD Ryzen 5 5500, 16GB RAM, 512GB SSD - Gamin", img: "https://iqq6kf0xmf.gjirafa.net/images/7744d744-3b37-46bb-907b-9465ba693e10/7744d744-3b37-46bb-907b-9465ba693e10.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-amd-ryzen-5-5500-16gb-ram-512gb-ssd-gaming-pc-gjirafa50-black-series-4"  },
      { name: "Gaming PC Gjirafa50 Black Series 18", desc: "RX 7600, AMD Ryzen 5 5600X, 32GB RAM, 512GB SSD ", img: "https://iqq6kf0xmf.gjirafa.net/images/dc15deba-dad2-4606-8098-33b72ccdf1c3/dc15deba-dad2-4606-8098-33b72ccdf1c3.webp?w=400", shop: "https://gjirafa50.com/rx-7600-amd-ryzen-5-5600x-32gb-ram-512gb-ssd-gaming-pc-gjirafa50-black-series-18"  },
      { name: "Kompjuter Gaming SPRING SERIES 4", desc: "Ryzen 7-5700X3D / 16GB / 500GB / RTX 4060 8GB / Case QUAD LUXX / I zi", img: "https://startech24.com/wp-content/uploads/quadluxx-ezgif.com-webp-to-png-converter-1-1.png", shop: "https://startech24.com/produkti/kompjuter-gaming-spring-series-4-ryzen-7-5700x3d-16gb-500gb-rtx-4060-8gb-case-quad-luxx-i-zi/"  },
      { name: "Kompjuter Gaming Retake", desc: "Ryzen 5 5500 / 16GB / 500GB / RTX 3050 8GB / MS ARMOR V500 / e zez", img: "https://startech24.com/wp-content/uploads/3067049.jpg", shop: "https://startech24.com/produkti/kompjuter-gaming-retake-ryzen-5-5500-16gb-500gb-rtx-3050-8gb-ms-armor-v500-e-zez/"  },
      { name: "Kompjuter Gjirafa50,", desc: "AMD Ryzen 5 5600, 16GB RAM, 512GB SSD, Integrated Graphics Card, i bardhë" , img: "https://iqq6kf0xmf.gjirafa.net/images/9c01ff4b-f49c-4d51-be61-6906793770f4/9c01ff4b-f49c-4d51-be61-6906793770f4.webp?w=400", shop: "https://gjirafa50.com/kompjuter-gjirafa50-amd-ryzen-5-5600-16gb-ram-512gb-ssd-integrated-graphics-card-i-bardhe" },
      { name: "Kompjuter Gjirafa50 Quantum Phantom", desc: "AMD Ryzen 7 9800X3D, 32GB RAM, 1TB SSD, ASUS TUF Gaming GeForce RTX 5080, 16GB, I ZI" , img: "https://iqq6kf0xmf.gjirafa.net/images/f21cd439-4851-4005-b4ea-a71b780ba1bb/f21cd439-4851-4005-b4ea-a71b780ba1bb.webp?w=400", shop: "https://gjirafa50.com/kompjuter-gjirafa50-quantum-phantom-amd-ryzen-7-9800x3d-32gb-ram-1tb-ssd-asus-tuf-gaming-geforce-rtx-5080-16gb-i-zi" },
      { name: "Kompjuter LYNX Challenger", desc: "AMD Ryzen 5, 16GB RAM DDR4, 1TB SSD, NVIDIA GeForce RTX 2060, i zi" , img: "https://iqq6kf0xmf.gjirafa.net/images/4aa6038e-b640-48b4-9684-aad93cf4d78f/4aa6038e-b640-48b4-9684-aad93cf4d78f.webp?w=400", shop: "https://gjirafa50.com/outlet-kompjuter-lynx-challenger-amd-ryzen-5-16gb-ram-ddr4-1tb-ssd-nvidia-geforce-rtx-2060-i-zi-2" },  ],
    mid: [
      { name: "PC Gjirafa50 Black Series 26", desc: "RTX 4060 Ti, AMD Ryzen 5 7600X, 32GB RAM, 1TB SSD - Gaming", img: "https://iqq6kf0xmf.gjirafa.net/images/1a8ba97a-457e-4d20-bd9f-6e18f82fe89b/1a8ba97a-457e-4d20-bd9f-6e18f82fe89b.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-ti-amd-ryzen-5-7600x-32gb-ram-1tb-ssd-gaming-pc-gjirafa50-black-series-26"  },
      { name: "Gaming PC Gjirafa50 Black Series 1", desc: "RTX 4060 Ti, AMD Ryzen 7 5700X3D, 32GB RAM, 512GB SSD -" , img: "https://iqq6kf0xmf.gjirafa.net/images/ab50512d-e9e1-4b57-b4f2-554d7a22ddae/ab50512d-e9e1-4b57-b4f2-554d7a22ddae.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-ti-amd-ryzen-7-5700x3d-32gb-ram-512gb-ssd-gaming-pc-gjirafa50-black-series-1" },
      { name: "Gaming PC Gjirafa50 Black Series 13", desc: "RTX 4060, AMD Ryzen 9 5900X, 32GB RAM, 1TB SSD " , img: "https://iqq6kf0xmf.gjirafa.net/images/4981259d-35c4-4737-8291-2e7a2fd73ee4/4981259d-35c4-4737-8291-2e7a2fd73ee4.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-amd-ryzen-9-5900x-32gb-ram-1tb-ssd-gaming-pc-gjirafa50-black-series-13" },
      { name: "Gaming PC Gjirafa50 Black Series 49", desc: "RTX 4060, Intel Core i5-14600KF, 32GB RAM, 512GB SSD SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/61ee3bf4-78e5-42be-89fc-9f8432fc89a3/61ee3bf4-78e5-42be-89fc-9f8432fc89a3.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-intel-core-i5-14600kf-32gb-ram-512gb-ssd-ssd-gaming-pc-gjirafa50-black-series-49" },
      { name: "Gaming PC Gjirafa50 Black Series 22", desc: "RTX 4060, AMD Ryzen 5 7600X, 32GB RAM, 512GB SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/3e7363d4-43e9-443e-b049-477e69f2d485/3e7363d4-43e9-443e-b049-477e69f2d485.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-amd-ryzen-5-7700x-32gb-ram-512-ssd-gaming-pc-gjirafa50-black-series-22" },
      { name: "Kompjuter Gaming Spray", desc: " i5-14400F / 32GB / 1TB / RTX 4070 12GB / Case SOLAR SYSTEM / I zi" , img: "https://startech24.com/wp-content/uploads/solar-systemx-case.png ", shop: "https://startech24.com/produkti/kompjuter-gaming-spray-i5-14400f-32gb-1tb-rtx-4070-12gb-case-solar-system-i-zi/" },
      { name: "Kompjuter Gaming Onetap", desc: "Ryzen 7-7800X3D / 32GB / 1TB / RTX 4060 8GB / Case Pro-Storm Light / I bardhë", img: "https://startech24.com/wp-content/uploads/pc-onetap8001W_V1_72_web-Photoroom-e1742114442462.webp", shop: "https://startech24.com/produkti/kompjuter-gaming-onetap-ryzen-7-7800x3d-32gb-1tb-rtx-4060-8gb-case-pro-storm-light-i-bardhe/"  },
      { name: "Kompjuter Gaming Medusa", desc: "Ryzen 7 7800X3D / 32GB / 1TB / RTX 5070 12GB / Solar System X / e zeze", img: "https://startech24.com/wp-content/uploads/E910_LC-POWER_LC-709B-ON_01.png", shop: "https://startech24.com/produkti/kompjuter-gaming-medusa-ryzen-7-7800x3d-32gb-1tb-rtx-5070-12gb-solar-system-x-e-zez/" }
    ],
    high: [
      { name: "PC Gjirafa50 Black Series 46", desc: "RTX 5070, AMD Ryzen 7 7800X3D, 32GB RAM, 1TB SSD - Gaming" , img: "https://iqq6kf0xmf.gjirafa.net/images/02d261d0-a36e-4752-9ebd-f69bf517be36/02d261d0-a36e-4752-9ebd-f69bf517be36.webp?w=400", shop: "https://gjirafa50.com/black-series-46" },
      { name: "Gaming PC Gjirafa50 Black Series 57", desc: "RTX 5080, Intel Core i9-14900K, 64GB RAM, 1TB SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/210e06a5-7059-48aa-b588-065bce083bad/210e06a5-7059-48aa-b588-065bce083bad.webp?w=400", shop: "https://gjirafa50.com/rtx-4090-intel-core-i9-14900k-64gb-ram-1tb-ssd-gaming-pc-gjirafa50-black-series-57" },
      { name: "Gaming PC Gjirafa50 Black Series 41", desc: "RTX 5080, AMD Ryzen 9 7950X, 32GB RAM, 1TB SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/60592be5-53d7-4b22-ac8e-66a45f700460/60592be5-53d7-4b22-ac8e-66a45f700460.webp?w=400", shop: "https://gjirafa50.com/rtx-4080-super-amd-ryzen-9-7950x3d-32gb-ram-1tb-ssd-gaming-pc-gjirafa50-black-series-41" },
      { name: "Gaming PC Gjirafa50 Black Series 22", desc: "RTX 4060, AMD Ryzen 5 7600X, 32GB RAM, 512GB SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/3e7363d4-43e9-443e-b049-477e69f2d485/3e7363d4-43e9-443e-b049-477e69f2d485.webp?w=400", shop: "https://gjirafa50.com/rtx-4060-amd-ryzen-5-7700x-32gb-ram-512-ssd-gaming-pc-gjirafa50-black-series-22" },
      { name: "Kompjuter Komputronik Ultimate R770 L14", desc: "Ryzen 7 / RTX 5070 Ti / 64GB / 2TB / W11H", img: "https://startech24.com/wp-content/uploads/ZKK304767418-1.jpg", shop: "https://startech24.com/produkti/kompjuter-komputronik-ultimate-r770-l14-ryzen-7-rtx-5070-ti-64gb-2tb-w11h/"  },
      { name: "Kompjuter Gaming Defuse", desc: "Ryzen 7-9800X3D / 32GB / 1TB / RTX 4070 Super 12GB / Case Lumaxx Light / I bardhë", img: "https://startech24.com/wp-content/uploads/pc-defuse-lc-power-gaming-900w-midi-tower-valkoinen-lc-power-lc-900w-on-Photoroom-e1742114818375.webp", shop: "https://startech24.com/produkti/kompjuter-gaming-defuse-ryzen-7-9800x3d-32gb-1tb-rtx-4070-super-12gb-case-lumaxx-light-i-bardhe/"  },
      { name: "Gaming PC Gjirafa50 Black Series 56", desc: "RTX 5080, Intel Core i9-14900K, 32GB RAM, 1TB SSD" , img: "https://iqq6kf0xmf.gjirafa.net/images/a2704480-d565-418b-8872-e2636ca0483e/a2704480-d565-418b-8872-e2636ca0483e.webp?w=400", shop: "https://gjirafa50.com/rtx-4080-intel-core-i9-14900k-32gb-ram-1tb-ssd-gaming-pc-gjirafa50-black-series-56" },
      { name: "Kompjuter Gjirafa50 Quantum Phantom", desc: "AMD Ryzen 7 9800X3D, 32GB RAM, 1TB SSD, ASUS TUF Gaming GeForce RTX 5080, 16GB, I ZI" , img: "https://iqq6kf0xmf.gjirafa.net/images/f21cd439-4851-4005-b4ea-a71b780ba1bb/f21cd439-4851-4005-b4ea-a71b780ba1bb.webp?w=400", shop: "https://gjirafa50.com/kompjuter-gjirafa50-quantum-phantom-amd-ryzen-7-9800x3d-32gb-ram-1tb-ssd-asus-tuf-gaming-geforce-rtx-5080-16gb-i-zi" },
    ]
  };

  let userData = {
    budget: null,
    gameType: null,
    game: null
  };

  function nextStep(step) {
    if (step === 2) {
      const selected = document.querySelector("input[name='budget']:checked");
      if (!selected) return alert("Please select your budget");
      userData.budget = selected.value;
    }
    if (step === 3) {
      const selected = document.querySelector("input[name='game-type']:checked");
      if (!selected) return alert("Please select your game type");
      userData.gameType = selected.value;
      populateGames(userData.gameType);
    }
    if (step === 4) {
      const selected = document.querySelector("input[name='game']:checked");
      if (!selected) return alert("Please select a specific game");
      userData.game = selected.value;
      showPCs(userData.budget);
    }

    document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(`step${step}`).classList.add("active");
  }

  function populateGames(type) {
    const container = document.getElementById("game-options");
    container.innerHTML = "";
    gameLibrary[type].forEach(game => {
      const id = game.replace(/\s+/g, '-').toLowerCase();
      container.innerHTML += `
        <input type="radio" id="${id}" name="game" value="${game}">
        <label for="${id}">${game}</label>
      `;
    });
  }

  function showPCs(budget) {
    const container = document.getElementById("pc-results");
    container.innerHTML = "";
  
    function getRandomPCs(array, count) {
      const shuffled = [...array].sort(() => 0.5 - Math.random()); // Shkëmben pozicionet rastësisht
      return shuffled.slice(0, count);
    }
    
    const pcs = getRandomPCs(pcRecommendations[budget], 4);
    
  
    pcs.forEach(pc => {
      const card = document.createElement('div');
      card.classList.add('pc-card');
      
      const pcImage = document.createElement('img');
      pcImage.src = pc.img;
      card.appendChild(pcImage);
      
      const pcName = document.createElement('h3');
      pcName.textContent = pc.name;
      card.appendChild(pcName);
      
     
      
      
      card.addEventListener("click", () => {
        localStorage.setItem("selectedPC", JSON.stringify(pc));
        window.location.href = "pc-result.html";
      });
      
      container.appendChild(card);
    });
  }
  
  // Thirrja e funksionit për të shfaqur PC-të
  displayPCs(pcRecommendations);
  
  


  