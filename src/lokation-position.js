import React, { PureComponent } from "react";



const pinStyle = {
  cursor: "pointer",
  stroke: "none",
};

export default class CityPin extends PureComponent {
  render() {
    const { size = 20, onClick } = this.props;

    return (
      <svg
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`,
        }}
        width="24"
        height="24"
        fill="red"
        viewBox="0 0 1000 1000"
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 500 0C 224 0 0 224 0 500C 0 776 224 1000 500 1000C 776 1000 1000 776 1000 500C 1000 224 776 0 500 0C 500 0 500 0 500 0 M 501 191C 626 191 690 275 690 375C 690 475 639 483 595 513C 573 525 558 553 559 575C 559 591 554 602 541 601C 541 601 460 601 460 601C 446 601 436 581 436 570C 436 503 441 488 476 454C 512 421 566 408 567 373C 566 344 549 308 495 306C 463 303 445 314 411 361C 400 373 384 382 372 373C 372 373 318 333 318 333C 309 323 303 307 312 293C 362 218 401 191 501 191C 501 191 501 191 501 191M 500 625C 541 625 575 659 575 700C 576 742 540 776 500 775C 457 775 426 739 425 700C 425 659 459 625 500 625C 500 625 500 625 500 625" />
      </svg>
    );
  }
}
