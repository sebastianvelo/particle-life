import config from "@game/config/simulator.config";
import colors from "@game/config/colors";

class RandomUtils {
  static randomX() {
    return Math.floor(
      (Math.random() * (config.canvas.width / 4)) +
      config.canvas.width / 2 -
      config.canvas.width / 8
    );
  }

  static randomY() {
    return Math.floor(
      (Math.random() * (config.canvas.height / 4)) +
      config.canvas.height / 2 -
      config.canvas.height / 8
    );
  }

  static randomVelocity(): number {
    const r = Math.random() * 0.3 + 0.2;
    return +r.toFixed(2);
  }

  static randomMass(): number {
    return Math.random() * 0.2 + 0.8;
  }

  static randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

export default RandomUtils;