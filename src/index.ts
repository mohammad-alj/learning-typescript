// Intersection type
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: (w: number, h: number) => void;
};

type UIWidget = Draggable & Resizable;

const obj: UIWidget = {
	drag() {
		return;
	},
	resize(w: number, h: number) {
		return w * h;
	},
};

obj.drag();
obj.resize(1, 2);
