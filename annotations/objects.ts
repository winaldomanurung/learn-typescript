const profile = {
  nama: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const age  = profile.age

const { age, nama }: { age: number; nama: string } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
