﻿using Contracts;
using MassTransit;
using MongoDB.Entities;

namespace BiddingService;

public class AuctionCreatedConsumer : IConsumer<AuctionCreated>
{
    public async Task Consume(ConsumeContext<AuctionCreated> context)
    {
        var auction = new Auction
        {
            ID = context.Message.Id.ToString(),
            Seller = context.Message.Seller,
            AuctionEnd = context.Message.AuctionEnd,
            ReversePrice = context.Message.ReservePrice
        };

        await auction.SaveAsync();
    }
}
