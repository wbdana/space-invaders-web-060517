class CrewMember{
    constructor(position){
      this.position = position;
      this.currentShip = 'Looking for a Rig';
    }

    checkForShip(){
      if(this.currentShip === 'Looking for a Rig'){
        return false
      } else {
        return true
      }
    }

    setShip(ship){
      this.currentShip = ship;
    }

    engageWarpDrive(){
      if(this.checkForShip()){
        if(this.position === 'Pilot'){
          this.currentShip.warpDrive = 'engaged!';
        }
      } else {
        return 'had no effect'
      }
    }

    setsInvisibility(){
      if(this.checkForShip()){
        if(this.position === 'Defender'){
          this.currentShip.cloaked = true;
        }
      } else {
        return 'had no effect'
      }
    }

    chargePhasers(){
      if(this.checkForShip()){
        if(this.position === 'Gunner'){
          this.currentShip.phasersCharge = 'charged!';
        }
      } else {
        return 'had no effect'
      }
    }
  }
