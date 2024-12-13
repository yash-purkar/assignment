import "./momentCard.css";

export const MomentCard = () => {
  return (
      <div className="moment_card flex flex-col gap-05">
        <img
          className="moment_img"
          src="https://s3-alpha-sig.figma.com/img/8561/9276/3a82dc8b251645bc4c2f6cfec4541a6f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XQ51vLTgl8rh3gRgay0ZAfDkwrD-IUnyJty2qBoyCbkKrARojxXINLh6G2iF-xAOROGGOZmWN1OMCDQPWnUrAofmrjDHtfB2A7DMGgJ5hKKfN~T7ae8xqL28N4FRbAGgPmGfoceXSVkXnRDUWBY1UexikGciPWlXxUHPke9lNeVkRO9A9kRb7RGbMhHcxsFZo9jlpE78mzQ7l4eKU0Gy7w-v0bK9ldWGi94w9KIKprZwZMgDPbprG6bFRGjWglEKQQllqIAwUUnym1mSTL8bpFurqQ3t9feiVYIY0AuD2h5aUA-GfqdoIkhvG~tYxIvUEDwB9Zo1NbIz3hbQyY8Rrw__"
          alt="moment_img"
        />
        <div className="flex align-center gap-05">
          <p className="light-white">Vinay</p>
          <p className="light-white">.</p>
          <p className="light-white">Sep 03, 2023</p>
        </div>
    </div>
  );
};
